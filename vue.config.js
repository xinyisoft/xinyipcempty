const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production'
    ? './'
    : '/'

module.exports = {
    baseUrl: BASE_URL,
    assetsDir: 'static',

    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },

    // 打包时不生成.map文件
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    // devServer: {
    //   proxy: 'localhost:3000'
    // }
    productionSourceMap: false,

    lintOnSave: undefined
}
