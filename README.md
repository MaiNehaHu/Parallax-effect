## Project with Tailwind CSS

> 01. `npm create vite@latest`

> 02. React, JS

> 03. `cd ./filename`

> 04. `npm install`

> 05. `npm run dev`

> 06. `npm install -D tailwindcss`

> 07. `npx tailwindcss init -p`

> 08. tailwind.config.js
    `/** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    fontFamily:{
        robot: ["Roboto", "sans-serif"],
    }
    plugins: [],
    }`

> 09. index.css
    `@tailwind base;
    @tailwind components;
    @tailwind utilities;`

> 10. App.jsx
    `const App = () => {
        return <div className="bg-blue-900">App</div>;
    };`