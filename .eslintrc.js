module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/strongly-recommended',
        '@vue/standard'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'indent': 0,
        'quotes ': 0,
        'semi': 0,
        'object-curly-spacing': 0,
        'standard/object-curly-even-spacing': 0,
        'space-before-function-paren': 0,
        'vue/html-indent': 0,
        'vue/html-self-closing': 0,
        'vue/max-attributes-per-line': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
