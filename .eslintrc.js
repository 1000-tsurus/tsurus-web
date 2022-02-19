module.exports = {
    plugins: ['prettier'],
    modules: false,
    parser: "babel-eslint",
    rules: {
        '@typescript-eslint/no-explicit-any': 2,
        "@typescript-eslint/naming-convention": "off",
        "brace-style": ["error", "allman"],
        "indent": ["error", 4],
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/semi": "off",
        "semi": ["error", "always"],
        // "parserOptions": {
        //     "sourceType": "module"
        // }
        // "parserOptions": {
        //     "ecmaFeatures": {
        //         "jsx": true,
        //         "modules": true
        //     }
        // }
    }
};