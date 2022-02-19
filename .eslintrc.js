module.exports = {
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    globals: {},
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "import", "react-hooks"],
    ignorePatterns: ["node_modules/"],
    rules: {},
    settings: {
        react: {
            version: "latest", // "detect" automatically picks the version you have installed.
        },
    },
    // plugins: ['prettier'],
    // modules: false,
    // rules: {
    //     '@typescript-eslint/no-explicit-any': 2,
    //     "@typescript-eslint/naming-convention": "off",
    //     "brace-style": ["error", "allman"],
    //     "indent": ["error", 4],
    //     "@typescript-eslint/indent": ["error", 4],
    //     "@typescript-eslint/semi": "off",
    //     "semi": ["error", "always"],
    //     "parserOptions": {
    //         "sourceType": "module"
    //     }
    //     // "parserOptions": {
    //     //     "ecmaFeatures": {
    //     //         "jsx": true,
    //     //         "modules": true
    //     //     }
    //     // }
    // }
};