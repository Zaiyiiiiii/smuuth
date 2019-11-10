module.exports = {
    devServer: {
        proxy: {
            "/api/netease": {
                target: "http://localhost:3000/",  
                // ignorePath: true,
                pathRewrite: {'^/api/netease' : ''},
                changeOrigin: true
            }
        }
    }
}