import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const navigationDefault = {
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: '#000',
    navigationBarTitleText: '轻餐饮小程序',
    navigationBarIcon: '',
    backgroundColor: '#eeeeee',
    navigationMenus: [],
    navigationHide: false
};

export default new Vuex.Store({
    state: {
        isAdmin: false,
        authConfig: {},
        appNavConfig: navigationDefault,
        authPublic: ['/', '/noauth', '/pages/default'],
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
