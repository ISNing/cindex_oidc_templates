import Vue from 'vue'
import minifyTheme from 'minify-css-string'
// import Vuetify from "vuetify"

Vue.use(window.Vuetify)

const opts = {
    theme: {
        themeCache: {
            get: key => localStorage.getItem(key),
            set: (key, value) => localStorage.setItem(key, value),
        },
        options: { minifyTheme },
    },
}

export default new window.Vuetify(opts)