import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const navigationDefault = {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '轻餐饮小程序',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light',
    navigationImmerse: false,
    navigationMenus: [],
    navigationBackButton: false
};

export default new Vuex.Store({
    state: {
        isAdmin: true,
        authConfig: {},
        appNavConfig: navigationDefault,
        authPublic: ['/', '/pages/auth/no', '/pages/example/*'],
        menuSelect: '/',
        appConfig: {
            appid: 1000,
            openid: 'OPENID-aksajaskjaslas',
            xinyitoken: 'jajaassaksadlkdas',
            sid: '100'
        }
    },
    mutations: {
        setAdmin(state, paylaod) {
            state.isAdmin = paylaod
        },
        setMenuSelect(state, paylaod) {
            state.menuSelect = paylaod
        },
        setAuthConfig(state, payload) {
            state.authConfig = Object.assign({}, payload)
        },
        setAppConfig(state, payload) {
            state.appConfig = Object.assign({}, payload)
        },
        setPageConfig(state, config) {
            state.appNavConfig = Object.assign({}, state.appNavConfig, navigationDefault, config)
        },
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading
        }
    },
    actions: {}
})
