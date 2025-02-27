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
npm create vite@latest my-app -- --template react

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

# Generate the Tailwind configuration file
npx tailwindcss init
```

##### Configure Files Properly
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

##### 🌸 Setup CSS File
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
##### 🌸 Add Tailwind to Your Styles (`./src/index.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
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


## 🌸 Styling in React 
### Tailwind CSS

#### Custom styling
- There are two ways to add custom styling in React.
    1. Inline styling
       - `text-[num]` 
    2. External styling
       - In the `tailwind.config.js` file add the following code.
            ```js
            module.exports = {
                theme: {
                    extend: {
                        colors: {
                            'custom-color': '#FF0000',
                        },
                        fontFamily: {
                            'custom-font': ['Poppins'],
                        },
                        fontSize: {
                            'custom-size': '2rem',
                        },
                    },
                },
            }
            ``` 

            ```jsx
            <!-- Add custom component to the jsx file -->
            <div className="text-custom-color font-custom-font text-custom-size">
                Hello World
            ```
#### CSS file
- **`@tailwind base`**:
  - Styles applied globally to the entire project.
- **`@tailwind components`**:
  - Styles applied to specific components.
- **`@tailwind utilities`**:
  - Styles applied to utility classes like animation, color, font-size, etc.
- **`@layer`**:
  - Used to apply styles to specific components.
  - Example:
    ```css
    @layer components {
      .btn {
        @apply bg-blue-500 text-white;
      }
    }
    ```

#### Explanation of `@apply` and `@layer`
- **`@apply`**:
  - The `@apply` directive in Tailwind CSS allows you to use utility classes within your custom CSS. This helps you avoid repeating the same utility classes and keeps your CSS DRY (Don't Repeat Yourself).
  - Example:
    ```css
    .btn {
      @apply bg-blue-500 text-white py-2 px-4 rounded;
    }
    ```

- **`@layer`**:
  - The `@layer` directive in Tailwind CSS is used to define custom layers for your styles. This helps you organize your CSS and control the order in which styles are applied.
  - Example:
    ```css
    @layer components {
      .btn {
        @apply bg-blue-500 text-white;
      }
    }
    ```



#### Tailwind CSS Plugins libraries
- Shadcn
- TailwindCSS UI: pre-built components for React and Vue
- Headless UI: pre-built components for React and Vue
- Heroicons: SVG icons for React and Vue