import Vue from 'vue'
// import ElementUI from 'element-ui'
import { Button, Notification} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

// Vue.use(ElementUI)
Vue.use(Button)

Vue.prototype.$notify = Notification;

new Vue({
  el: '#app',
  render: h => h(App)
})
