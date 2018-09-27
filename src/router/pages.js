import Main from '@/view/main'
export default [{
  path: '/demo2',
  name: 'demo2',
  meta: {
    icon: 'logo-buffer',
    title: 'Demo2'
  },
  component: Main,
  children: [
    {
      path: 'demo2_page',
      name: 'demo2_page',
      meta: {
        icon: 'ios-hammer',
        title: '工具方法'
      },
      component: () => import('@/view/demo/demo.vue')
    }
  ]
}]
