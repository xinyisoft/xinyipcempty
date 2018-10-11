import DivAuth from './DivAuth'
import SpanAuth from './SpanAuth'
import XinyiJS from '../xinyi'
import Pinyin from './pinyin'
import {Drawer} from 'iview'

const components = {
    DivAuth,
    SpanAuth,
    Drawer
}

const XinyiAuth = {
    ...components
}

const XinyiAuthApi = {
    ...components,
    install(Vue, options) {
        Object.keys(XinyiAuth).forEach(key => {
            Vue.component(key, XinyiAuth[key]);
        });
        Vue.use(XinyiJS)
        Vue.use(Pinyin)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(XinyiAuthApi)
}
export default XinyiAuthApi
