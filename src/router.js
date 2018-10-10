import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import routerdata from './config/pages.json'
import {LoadingBar} from 'iview'

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
        },
        {
            path: '/noauth',
            name: 'noauth',
            component: resolve => require(['@/pages/app/noauth'], resolve),
            meta: {
                config: require('@/pages/app/noauth.json')
            }
        }
    ]
})
routerdata.forEach(function (obj, index) {
    if (index === 0) {
        Routers.addRoutes([{
            path: '/',
            name: 'home',
            component: resolve => require(['./' + obj], resolve),
            meta: {
                config: require('./' + obj + '.json')
            }
        }])
    } else {
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
const loadAppinfo = false;

function getAppInfo(callback) {
    if (loadAppinfo) {
        callback();
        return true
    }
    try {
        XY.getAppLoginInfo({
            success(res) {
                store.commit('setAppConfig', res);
                XY.getUserAuth({
                    success(res) {
                        if (res.super === true) {
                            store.commit('setAdmin', true)
                        }
                        store.commit('setAuthConfig', res.auth)
                        callback();
                    },
                    fail(e) {
                        callback()
                    }
                })
            },
            fail(e) {
                callback()
            }
        })
    } catch (e) {
        callback()
    }
}

Routers.beforeEach((to, from, next) => {
    LoadingBar.start()
    store.commit('setMenuSelect', to.path);
    getAppInfo(function () {
        // 对页面进行鉴权
        if (process.env.NODE_ENV === 'production' && !store.state.isAdmin) {
            if (store.state.authPublic.indexOf(to.path) === -1 && !store.state.authConfig[to.path]) {
                Routers.push('/noauth')
                next(false)
                return false
            }
        }
        next();
    })
})

Routers.afterEach(to => {
    LoadingBar.finish()
    window.scrollTo(0, 0)
})

export default Routers
