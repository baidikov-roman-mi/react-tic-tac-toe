[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=42&pause=1000&center=true&vCenter=true&random=false&width=735&height=70&lines=Tic+Tac+Toe)](https://git.io/typing-svg)

## Overview

This project serves as a tic tac toe game using Vite for faster development, TypeScript for type checking, SCSS for styling, and React for building user interfaces.

### Technologies used:

<div align="center">
	<br>
		<img src="/ReadmeLogos.svg" width="800" height="400" alt="Click to see the source">
	<br>
</div>

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
