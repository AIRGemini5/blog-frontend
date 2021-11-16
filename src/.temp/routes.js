const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/huangxiaofei/Desktop/拉勾每日资料/Part 3 · Vue.js 框架源码与进阶/4.搭建自己的SSR、静态站点生成（SSG）及封装 Vue.js 组件库/本阶段的代码案例 自建/qd-gridsome/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--projects-vue" */ "/Users/huangxiaofei/Desktop/拉勾每日资料/Part 3 · Vue.js 框架源码与进阶/4.搭建自己的SSR、静态站点生成（SSG）及封装 Vue.js 组件库/本阶段的代码案例 自建/qd-gridsome/src/templates/Projects.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/huangxiaofei/Desktop/拉勾每日资料/Part 3 · Vue.js 框架源码与进阶/4.搭建自己的SSR、静态站点生成（SSG）及封装 Vue.js 组件库/本阶段的代码案例 自建/qd-gridsome/src/pages/Journal.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/huangxiaofei/Desktop/拉勾每日资料/Part 3 · Vue.js 框架源码与进阶/4.搭建自己的SSR、静态站点生成（SSG）及封装 Vue.js 组件库/本阶段的代码案例 自建/qd-gridsome/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/huangxiaofei/Desktop/拉勾每日资料/Part 3 · Vue.js 框架源码与进阶/4.搭建自己的SSR、静态站点生成（SSG）及封装 Vue.js 组件库/本阶段的代码案例 自建/qd-gridsome/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/huangxiaofei/Desktop/拉勾每日资料/Part 3 · Vue.js 框架源码与进阶/4.搭建自己的SSR、静态站点生成（SSG）及封装 Vue.js 组件库/本阶段的代码案例 自建/qd-gridsome/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/huangxiaofei/Desktop/拉勾每日资料/Part 3 · Vue.js 框架源码与进阶/4.搭建自己的SSR、静态站点生成（SSG）及封装 Vue.js 组件库/本阶段的代码案例 自建/qd-gridsome/src/pages/Index.vue")

export default [
  {
    path: "/post/:id/",
    component: c1
  },
  {
    path: "/projects/:id/",
    component: c2
  },
  {
    path: "/journal/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
