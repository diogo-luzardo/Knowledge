import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import './config/boostrap'
import './config/msgs'
import App from './App'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkRpb2dvIEZhcmlhIEx1emFyZG8iLCJlbWFpbCI6ImRpb2dvaHhjeEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTY3ODU5NTIwLCJleHAiOjE1NjgxMTg3MjB9.8IZoOthNGCfoenN_UWcX1LDxv1N7En-_OBcl9rLjwuY'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')