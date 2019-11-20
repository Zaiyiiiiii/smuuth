module.exports = {
    devServer: {
        proxy: {
            "/api/netease": {
                target: "http://localhost:3000/",
                // ignorePath: true,
                pathRewrite: { '^/api/netease': '' },
                changeOrigin: true
            }
        },
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8080
    }
}