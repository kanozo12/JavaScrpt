const path = require('path');
const mini = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename:'app.js',
        path:path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new MiniCss({filename: 'style.css'})
    ],
    resolve: {
        module:['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css']
    }
}