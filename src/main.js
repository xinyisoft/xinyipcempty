import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import XinyiCom from './components/xinyicom/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(ElementUi)
Vue.use(XinyiCom)

console.log(store)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
