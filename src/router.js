import Vue from 'vue'
import Router from 'vue-router'
import routerdata from './pages.json'

console.log(routerdata)

Vue.use(Router)

const Routers = new Router({
    routes: [
        {
            path: '*',
            name: 'html404',
            component: resolve => require(['@/pages/app/default'], resolve),
            meta: {
                config: require('@/pages/app/default.json')
            }
        }
    ]
})
routerdata.forEach(function (obj, index) {
    console.log(obj, index);

    if (index === 0) {
        Routers.addRoutes([{
            path: '/',
            name: 'home',
            component: resolve => require(['./' + obj], resolve),
            meta: {
                config: require('./' + obj + '.json')
            }
        }])
    }else{
        Routers.addRoutes([{
            path: '/' + obj,
            name: obj,
            component: resolve => require(['./' + obj], resolve),
            meta: {
                config: require('./' + obj + '.json')
            }
        }])
    }
})
export default Routers
