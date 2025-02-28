import React, { useState } from 'react'
import { useRef } from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoanding, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState([]);

    const totalVideos = 3;
    const nextVideoRef = useRef(null);
    const upcomingVIdeoIndex = (currentIndex % totalVideos) + 1;
    const getVideoSrc = (index)=> `videos/hero-${index}.mp4`;

    const handleMiniVdClick = ()=>{
        setHasClicked(true);
        setCurrentIndex(upcomingVIdeoIndex);
    }



    const handleVideoLoad = ()=>{
        setLoadedVideos((prev)=> prev+1);
    }
  return (
    <div  className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                    <video loop 
                    ref={nextVideoRef} 
                    src={getVideoSrc(upcomingVIdeoIndex)}
                    muted
                    id="current-video"
                    className='size-64 origin-center scale-150 object-cover object-center'
                    onLoadedData={handleVideoLoad}/>
                </div>
            </div>
            <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex)}
                loop
                muted
                id='next-video'
                className='absolute-center size-64 object-cover object-center invisible absolute z-20'
                onLoadedData={handleVideoLoad}/>

            <video
                src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                autoPlay
                loop
                muted
                className='absolute left-0 top-0 size-full object-cover object-center'
                onLoadedData={handleVideoLoad}/>
        </div>

        <h1 className='hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
            Gaming
        </h1>
        <div className='absolute left-0 top-0 z-40 size-full'>
            <div className='mt-24 px-5 sm:px-10 text-blue-100 hero-heading'>
                <h1>Redefine</h1>
                <p className='mb-5 max-w-64 font-robert-regular text-blue-100 text-sm'>
                    Enter the Metagame Layer <br /> Unleash the Play Economy
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero