import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'

// CSS global
import './assets/css/main.styl'

// Custom directives
import './directives'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  vuetify,
  methods: {
    // Nuestra función
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  // Hook created
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
