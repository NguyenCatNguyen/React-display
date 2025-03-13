# React-display
 
# Internet is hard
- A collection of resources that are helful for Frontend Developers.

# React.js
React.js is a JavaScript library for building user interfaces.

## Resources 📚
- [Viewport](https://viewport-ui.design)
  - UI design to study
- [DesignSpell](https://www.designspells.com/?tag=desktop)
  - Interactive UI design case studies
- [Cofolios](https://cofolios.com/)
  - Portfolio design inspiration
- [ItemsDesign](https://items.design/category/free)
  - Free texture and 3D ilustration images 
- [Neumorphism](https://neumorphism.io/)
  - Shadow design editor 
- [DaisyUI](https://daisyui.com)
  - Tailwind CSS component library


# React + Vite Project Setup Guide

A comprehensive guide for setting up a React project with Vite, including common tools and libraries.

## Basic Project Setup


### 1️⃣ Create a New Project

```bash
# Create a new Vite + React project
npm create vite@latest

# Navigate to project directory
cd my-app

# Install dependencies
npm install
```

---

### 2️⃣ Install & Configure TailwindCSS
```bash
# Install TailwindCSS
npm install tailwindcss @tailwindcss/vite

# Create TailwindCSS configuration file
npx tailwindcss init -p
```

##### Configure Files 
`vite.config.ts`
```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
})

```

##### 🌸 Add Tailwind to Your Styles (`./src/index.css`)
```css
@import "tailwindcss";

/* Custom style */
@theme {
  --font-zentry: "zentry", "sans-serif";
  --font-general: "general", "sans-serif";

  /* Custom colors */
  --color-blue-50: #DFDFF0;
  --color-blue-75: #dfdff2;
  --color-blue-100: #F0F2FA;
  --color-blue-200: #010101;
  --color-blue-300: #4FB7DD;
  --color-violet-300: #5724ff;
  --color-yellow-100: #8e983f;
  --color-yellow-300: #edff66;
}
```

- With TailwindCSS v4, the PostCSS configuration is no longer required. So to add custom styles, using `@theme` in css file make it easier to maintain. 
---


### DaisyUI Library (Optional)
```bash
npm i -D daisyui@latest
```

### Icon Libraries

#### Option 1: Heroicons (Recommended)
```bash
npm install @heroicons/react
```

Usage:
```jsx
import { BeakerIcon } from '@heroicons/react/24/solid'

function Component() {
  return <BeakerIcon className="h-6 w-6 text-blue-500" />
}
```

#### Option 2: Font Awesome
```bash
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

Global setup (`main.jsx`):
```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)
```

Usage:
```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Component() {
  return <FontAwesomeIcon icon="heart" />
}
```

## Recommended Project Structure

```
project-root/
├── src/
│   ├── components/          # Reusable components
│   │   └── ui/             # UI components
│   ├── assets/             # Images, fonts, etc.
│   ├── layouts/            # Layout components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom hooks
│   ├── utils/              # Utility functions
│   ├── services/           # API services
│   ├── context/            # React context
│   ├── constants/          # Constants and config
│   ├── styles/             # Global styles
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                 # Static files
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Common Development Tools

### ESLint & Prettier

1. Install ESLint:
```bash
npm init @eslint/config
```

2. Install Prettier:
```bash
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

3. Create `.prettierrc`:
```json
{
  "semi": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

### Testing Setup (Vitest)

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Add to `package.json`:
```json
{
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```

### Environment Variables

Create `.env` files:
```plaintext
# .env.development
VITE_API_URL=http://localhost:3000

# .env.production
VITE_API_URL=https://api.yoursite.com
```

Usage:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
```

## Available Scripts

Add these to `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .js,.jsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write \"src/**/*.{js,jsx,css,md}\"",
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```

## Git Setup

1. Create `.gitignore`:
```plaintext
# Dependencies
node_modules
.pnp
.pnp.js

# Testing
coverage

# Production
dist
build

# Environment files
.env*
!.env.example

# Misc
.DS_Store
*.pem
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

2. Initialize repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

## Additional Recommendations

### Performance Optimization
- Use React.lazy() for code splitting
- Implement proper memoization (useMemo, useCallback)
- Optimize images using appropriate formats and sizes

### Security
- Implement proper environment variable handling
- Use HTTPS in production
- Sanitize user inputs
- Keep dependencies updated

### Accessibility
- Use semantic HTML
- Implement proper ARIA attributes
- Ensure keyboard navigation
- Maintain sufficient color contrast

## Troubleshooting Common Issues

1. **Vite HMR not working**
   - Clear browser cache
   - Check vite.config.js configuration
   - Ensure proper file naming conventions

2. **TailwindCSS classes not working**
   - Verify content paths in tailwind.config.js
   - Check PostCSS configuration
   - Clear build cache

3. **Environment variables undefined**
   - Ensure variables are prefixed with VITE_
   - Restart development server
   - Check .env file location

## Documentation
### Shortcuts
- `rafce` shortcut to create a functional component with export.
### COMPONENTS
- Component is a reusable piece of code that can be used to build UI elements.
- Functional Components
    ```jsx
    function App(){
        const [count, setCount] = useState(0);
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        )
    }
    // OR
    const App = () => {
        const [count, setCount] = useState(0);
    } 
    ```

### PROPS
- Props are used to pass data from parent component to child component.
- There are two way of passing props.
  - 1. By using the `props` object.
  - 2. By using destructuring.

- Example: **Function**
    ```jsx
    function Child(props){
        return <h1>{props.name}</h1>
    }
    function Parent(){
        return (
            <>
            <h2>Here the list of my children</h2>
            <Child name="Naruto"/>
            <Child name="Sasuke"/>
            <Child name="Hinata"/>
            </>
        )
    }
    ```

- Example: **Destructuring**
    ```jsx
    function Child({name}){
        return <h1>{name}</h1>
    }
    function Parent(){
        return (
            <>
            <h2>Here the list of my children</h2>
            <Child name="Naruto"/>
            <Child name="Sasuke"/>
            <Child name="Hinata"/>
            </>
        )
    }
    ```
### STATE
- State is used to store data that can change over time.

### HOOKS
- Special function to add features to functional components
#### useState
- In useState we can understand that:
  - `like` is a state value, and will be update once setLike is called.
  - `setLike` is a function that will update the value of `like`. 
    ```jsx
    function Favorite(props){
        const [like, setLike] = useState(false);
        return(
            <>
            <p>{props.movieName}</p>
            <button onClick={()=> setLike(!like)}>
                {like ? "Unlike" : "Like"}
            </>
        )
    }
    ```
- In this example `{like ? "Unlike" : "Like"}` is a conditional rendering. It can be translate to if like is true then render "Unlike" else render "Like".
- Use Case:
  - Like button
  - Dark mode
  - Toggle button
  - Form input
  - Counter 
  - 
#### useEffect
- Use to perform js function after the component has been rendered.
    ```jsx
    function App(){
        const [count, setCount] = useState(0);
        useEffect(() => {
            document.title = `You clicked ${count} times`;
        });
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        )
    }
    ```


--- 
# ✨ ✨ Tailwind CSS ✨ ✨
## ⚙️ Installation
##### 🧩 Install Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/vite
```

##### 🧩 Import Tailwind CSS in the CSS file
- `@import "tailwindcss";`

##### 🧩 Import Tailwind CSS in the CSS file
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

```

## ⭐️ General Core Concepts
### Layers
```css

@layer base{
    /* Base styles */
    /* Styles applied globally to the entire project. */
}

@layer components{
    /* Component styles */
    /* Styles applied to specific components. */
}

@layer utilities{
    /* Utility styles */
    /* Styles applied to utility classes like animation, color, font-size, etc. */
}
```

### 🧩 Custom Setup with `@theme`
➡️ Import Google fonts to css file

```css
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Rye&display=swap');
@import "tailwindcss";

/*  */
@theme {
  --font-rye: "Rye", serif;
  --font-custom: "Lilita One", sans-serif;
  --color-custom: #B99F65;
}
```
➡️ Add **custom theme** elements to the jsx file
```jsx
<div>
    <p className=" color-custom font-custom">Hello World</p>
</div>
```

#### Tailwind CSS Plugins libraries
- Shadcn
- TailwindCSS UI: pre-built components for React and Vue
- Headless UI: pre-built components for React and Vue
- Heroicons: SVG icons for React and Vue

---
# 💫 💫 GSAP 💫 💫

## useGSAP
- Don't need to Clean up the animation
- Easier to use

```jsx
useGSAP(() => {
  // Pick ONE of these based on your animation goal:
  
  // OPTION 1: "to" - Move TO a new state
  gsap.to(".element", { x: 100, duration: 1, ease: "power2.out" });
  
  // OPTION 2: "from" - Start FROM a state and go to current
  gsap.from(".element", { x: -100, opacity: 0, duration: 1 });
  
  // OPTION 3: "fromTo" - Define start AND end
  gsap.fromTo(".element", { x: -100, opacity: 0 }, { x: 100, opacity: 1, duration: 1 });
  
  // OPTION 4: "set" - Instantly set properties (no animation)
  gsap.set(".element", { x: 0, opacity: 1 });
},
    // SCOPE: If there are multiple box classes, we use SCOPE to target the specific container
    scope: containerRef 

    // DEPENDENCIES: If the state changes, the animation will run again
    dependencies: [state]  

    //REVERONUPDATE: the object will return to it original state before doing the animation again
    runOnUpdate: true);
```

## ScrollTrigger
- `toggleActions`

- `markers` - Show the trigger markers
-  