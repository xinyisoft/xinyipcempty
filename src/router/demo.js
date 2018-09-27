import Main from '@/view/main'

export default [{
  path: '/demo',
  name: 'demo',
  meta: {
    icon: 'logo-buffer',
    title: 'Demo'
  },
  component: Main,
  children: [
    {
      path: 'demo_page',
      name: 'demo_page',
      meta: {
        icon: 'ios-hammer',
        title: '工具方法'
      },
      component: () => import('@/view/demo/demo.vue')
    }
  ]
}]
