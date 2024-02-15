[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=42&pause=1000&center=true&vCenter=true&random=false&width=735&height=70&lines=Tic+Tac+Toe)](https://git.io/typing-svg)

## Overview

This project serves as a tic tac toe game using Vite for faster development, TypeScript for type checking, SCSS for styling, and React for building user interfaces.

### Technologies used:

<svg fill="none" viewBox="0 0 800 400" width="800" height="400" xmlns="http://www.w3.org/2000/svg">
 <foreignObject width="100%" height="100%">
  <div xmlns="http://www.w3.org/1999/xhtml">
   <style>
    @keyframes rotate {
     0% {
      transform: rotate(3deg);
     }
     100% {
      transform: rotate(-3deg);
     }
    }

    @keyframes gradientBackground {
     0% {
      background-position: 0% 50%;
     }
     50% {
      background-position: 100% 50%;
     }
     100% {
      background-position: 0% 50%;
     }
    }

    @keyframes fadeIn {
     0% {
      opacity: 0;
     }
     66% {
      opacity: 0;
     }
     100% {
      opacity: 1;
     }
    }

    .container {
     font-family:
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji';
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     margin: 0;
     width: 100%;
     height: 400px;
     background: linear-gradient(-45deg, #fc5c7d, #6a82fb, #05dfd7);
     background-size: 600% 400%;
     animation: gradientBackground 10s ease infinite;
     border-radius: 10px;
     color: white;
     text-align: center;
    }

    h1 {
     font-size: 50px;
     line-height: 1.3;
     letter-spacing: 5px;
     text-transform: uppercase;
     text-shadow:
      0 1px 0 #efefef,
      0 2px 0 #efefef,
      0 3px 0 #efefef,
      0 4px 0 #efefef,
      0 12px 5px rgba(0, 0, 0, 0.1);
     animation: rotate ease-in-out 1s infinite alternate;
    }

    p {
     font-size: 20px;
     text-shadow: 0 1px 0 #efefef;
     animation: 5s ease 0s normal forwards 1 fadeIn;
    }

   </style>
   <div class="container">
    <h1>Made with HTML &amp; CSS<br/>not an animated GIF</h1>
    <p>Click to see the source</p>
   </div>
  </div>
 </foreignObject>
</svg>

### Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Just to see the output

Here you will be able to see the result without any local setup.

## To load this project locally, follow these steps:

### First step: Check for `node` and `pnpm`

- To check it, run the following commands in your bash terminal: `node -v`, `pnpm -v`

  - If you don't have `node` on your device, install it [here](https://nodejs.org/en)

  - If you don't have `pnpm`, run this command in your terminal: `npm install -D pnpm`

### Second step: Clone this repository using this commands :

```
git clone https://github.com/baidikov-roman-mi/react-tic-tac-toe
cd react-tic-tac-toe
```

> The cd command is necessary only if your current folder is not empty.

Otherwise, just add "." in the end of `git clone`, and the project will be cloned iside of the folder you are in:

```
git clone https://github.com/baidikov-roman-mi/react-tic-tac-toe .
```

### Third step: Local setup

You have to install dependencies, add sass and finally start the development server by running dev command. You can do so with the following command:

```
pnpm install && pnpm add -D sass && pnpm run dev
```

You'll get a message inside the bash terminal:

> **Server running at http://localhost:5173/**

This means that you have successfully set up the project and you are free for local coding.
