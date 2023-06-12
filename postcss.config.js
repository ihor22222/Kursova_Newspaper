import postcssNesting from 'postcss-nesting'

module.exports = {
    parser: 'sugarss',
    map: false,
    plugins: [
        require('postcss-plugin'),
        require('postcss-nesting')
    ]
}