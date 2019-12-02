const menu = [
  {
    title: '首页',
    href: '/home'
  },
  {
    title: '记账',
    children: [
      {
        title: '类型管理',
        href: '/typeManagement'
      },
      {
        title: '账单管理',
        href: '/billManagement'
      }
    ],
  },
  {
    title: '用户管理',
    href: '/userManagement'
  }
]

export default menu