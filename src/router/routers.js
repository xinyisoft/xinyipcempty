import Main from '@/view/main'
import pages from './pages'
import demo from './demo'

let routers = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
];
routers = routers.concat(pages);

routers = routers.concat([
  {
    path: '/update_log',
    name: 'update_log',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'update_log_page',
        name: 'update_log_page',
        meta: {
          icon: 'ios-alarm-outline',
          title: '升级记录'
        },
        component: () => import('@/view/update/log.vue')
      }
    ]
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: Main,
    children: [
      {
        path: 'aboutus_page',
        name: 'aboutus_page',
        meta: {
          icon: 'ios-contact-outline',
          title: '关于我们'
        },
        component: () => import('@/view/update/aboutus.vue')
      }
    ]
  }
]);
// 如果是开发模式就引入demo
if (process.env.NODE_ENV === 'development'){
  routers = routers.concat(demo);
}

export default routers;
