# Vue 3 + TypeScript + Vite + Element Plus

This template should help get you started developing with Vue 3 and TSX in Vite. The template uses Vue 3 JSX with TypeScript, check out the [Babel Plugin JSX for Vue 3.0](https://github.com/vuejs/babel-plugin-jsx) to learn more.

## Requirement 

- Node.js
- Yarn

Run `yarn` to install the dependencies. 

`yarn dev` to run Vite development server.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Project Structure

```
├── auto-imports.d.ts
├── components.d.ts
├── index.html
├── LICENSE
├── package.json
├── public
│   └── favicon.ico
├── README.md
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── Header.tsx
│   ├── env.d.ts
│   ├── main.ts
│   ├── router
│   │   └── index.ts
│   └── views
│       └── home.tsx
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

<!-- ## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471). -->


## ESLint code lint

Run `yarn lint` to execute ESLint. `yarn lint:fix` to fix pattern error.

## Reference

- [极致的开发体验 ! Vite + Vue 3 + tsx 完整教程 - 掘金](https://juejin.cn/post/6972094589251354632)