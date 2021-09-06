// 查看占用空间
// 打包开启gzip
module.exports = {
  runtimeCompiler: true,
  productionSourceMap: process.env.NODE_ENV !== 'production', // 去除.map文件
  publicPath: './', // 设置打包后的静态文件相对index.html路径
  assetsDir: 'static', // 跟换打包后的静态资源文件夹名称
  outputDir: 'woodpeckers', // 打包后的文件名称
  // assetsDir 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  // indexPath 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  devServer: {
    host: process.env.Host || '0.0.0.0',
    // https: true,
    open: true, // 自启动
    port: 9001,
    proxy: {
      '/bigData': {
        target: 'http://61.182.87.250:8026',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/bigData': '/bigData'
        }
      }
    }
  }
}
