module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'no-undef': 0,
        'indent': 0,
        'quotes ': 0,
        'semi': 0,
        'object-curly-spacing': 0,
        'standard/object-curly-even-spacing': 0,
        'space-before-function-paren': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
