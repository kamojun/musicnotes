import path from 'path'
// import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
  mode: 'production',
  //entry: src + '/index.jsx',
  entry: path.resolve(src, 'index.jsx'),

  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
  },

  // 本来jsしか理解しないwebpackに対し、moduleという翻訳機を噛ませて、例えばjsxとかも理解させる
  // その翻訳ルールがrules?
  module: {
    rules: [
      {
        test: /\.jsx$/,           // 変換対象を正規表現で指定
        exclude: /node_modules/,  // node_modulesは全部jsなので除外?
        loader: 'babel-loader',   // babel-loaderを噛ませてjsにしてから、bundleに渡す
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              //sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    // new webpack.SourceMapDevToolPlugin({}),
    new HtmlWebpackPlugin({
      template: src+'/index.html',
      filename: 'index.html'
    })
  ],
  // devtool: 'inline-source-map'
}
