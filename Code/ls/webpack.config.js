module.exports = {
    mode:'development',
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader', // 用<style>元素插入到<head>中
                    },
                    {
                        loader: 'css-loader', // 解析CSS语法
                        options: {
                            sourceMap: true, // 源码映射，不然打包后的样式跟源码对应不上，很难debug
                        },
                    },
                ]
            }
        ]
    }
}