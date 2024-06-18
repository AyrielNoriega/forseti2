
## Requisitos Previos

- Node v20.12.2
- NPM (v9.5.0) o Yarn (1.22.19)


## Configuración de la Proyecto

1. Clona el repositorio de la API de Laravel en tu máquina local:
    ```bash
    git clone https://github.com/RentekFintech/forseti

2. Navega hasta el directorio del proyecto:
    ```bash
    cd forseti/

3. Instala las dependencias del proyecto utilizando npm o yarn:
    ```bash
    npm install

    ó

    yarn install

4. Ejecuta el siguiente comando para iniciar la aplicación en modo desarrollo:
    ```bash
    yarn dev



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
