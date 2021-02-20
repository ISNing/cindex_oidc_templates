module.exports = {
    publicPath: './',
    configureWebpack: {
        externals:  {
            "vue": "Vue",
            'vue-i18n': 'vue-i18n',
            "vuetify": "Vuetify"
        }
    },
    devServer: {
        proxy: {
            '/github_raw': {
                target: 'https://raw.githubusercontent.com', // 请求域名
                //secure: true, // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果是跨域访问，需要配置这个参数
                pathRewrite: {
                    '^/github_raw': ''
                }
            }
        }
    },
    pages: {
        // authorize:{
        //     entry: "src/authorize/main.js",
        //     template: "public/authorize.html",
        //     filename: "authorize.html"
        // },
        create_client:{
            entry: "src/create_client/main.js",
            template: "public/create_client.html",
            filename: "create_client.html"
        },
        // home:{
        //     entry: "src/home/main.js",
        //     template: "public/home.html",
        //     filename: "home.html"
        // },
        login: {
            entry: "src/login/main.js",
            template: "public/login.html",
            filename: "login.html"
        },
        signup: {
            entry: "src/signup/main.js",
            template: "public/signup.html",
            filename: "signup.html"
        }
    }
};
