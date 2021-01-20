const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin }  = require("clean-webpack-plugin")

// webpack中的所有信息都写在module.exports
module.exports = {  
  // 指定入口文件
  entry: './src/index.ts',
  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件
    filename: 'bundle.js',
    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "78",
                      'ie': "11"
                    },
                    // 指定corejs的版本
                    "corejs": "3",
                    // 使用corejs的方式, usage 表示按需加载
                    "useBuiltIns": 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: '/node_modules/'
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title:"自定义title"
      template: './src/index.html'
    }),
  ],
  // 用来设置模块
  resolve: {
    extensions: ['.ts','.js']
  }
}