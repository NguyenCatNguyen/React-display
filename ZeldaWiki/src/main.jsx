import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faSearch, faSort} from '@fortawesome/free-solid-svg-icons'

// Adding the icon to the library
library.add(faHeart,faSearch, faSort);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




