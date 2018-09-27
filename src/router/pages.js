import Main from '@/view/main'

export default [
  {
    path: '/update_log2',
    name: 'update_log2',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'update_log_page2',
        name: 'update_log_page2',
        meta: {
          icon: 'ios-alarm-outline',
          title: '升级记录'
        },
        component: resolve => require(['@/view/update/log.vue'], resolve)
      }
    ]
  }
]
