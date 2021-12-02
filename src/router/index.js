import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/homes/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: home
  },
  {
    path: "/hangkong",
    name: "航空学院",
    component: () => import('@/views/hangkongs/hangkong.vue'),
    children: [
      {
        path: "/",
        name: "/",
        component: () => import('@/views/hangkongs/hk.vue')
      },
      {
        path: "sanxiaosheng",
        name: "三校生",
        component: () => import('@/views/hangkongs/student/sanxiaosheng.vue')
      },
      {
        path: "gaozhongsheng",
        name: "高中生",
        component: () => import('@/views/hangkongs/student/gaozhongsheng.vue')
      },
      {
        path: "chuzhongsheng",
        name: "初中生",
        component: () => import('@/views/hangkongs/student/chuzhongsheng.vue')
      },
      {
        path: "yikaosheng",
        name: "艺考生",
        component: () => import('@/views/hangkongs/student/yikaosheng.vue')
      },
    ]
  },
  {
    path: "/Service",
    name: "vip地勤专业",
    component: () => import('@/views/Service/service.vue')
  },
  {
    path: "/gaotie",
    name: "高铁乘务专业",
    component: () => import('@/views/gaotie/gaotie.vue')
  },
  {
    path: "/kongcheng",
    name: "空乘专业",
    component: () => import('@/views/kongcheng/kongcheng.vue')
  },
  {
    path: "/youlun",
    name: "游轮海城专业",
    component: () => import('@/views/youlun/youlun.vue')
  },
  {
    path: "/zhaoshengyaoqiu",
    name: "招生要求",
    component: () => import('@/views/zhaoshengyaoqiu/zhaoshengyaoqiu.vue')
  },
  {
    path: "/zaixianbaoming",
    name: "在线报名",
    component: () => import('@/views/zaixianbaoming/zaixianbaoming.vue')
  },
  {
    path: "/videos",
    name: "视频",
    component: () => import('@/components/videos/index.vue')
  },
  {
    path: "/sichuan",
    name: "四川外国语大学简介",
    component: () => import('@/views/sichuan/fours.vue')
  },
  {
    path: "/detail",
    name: "航空专业详情",
    component: () => import('@/views/details/details.vue')
  },
  {
    path: "/ynjd",
    component: () => import('@/views/ynjd/index.vue')
  },
  {

    path: "/ai",
    name: "人工智能切图",
    component: () => import('@/views/AI/index.vue')
  },
  {
    path: "/financial",
    name: "互联网金融与管理",
    component: () => import('@/views/financial/index.vue')
  },
  {
    path: "/Network",
    name: "网络新媒体运营",
    component: () => import('@/views/Network/index.vue')
  },
  {
    path: "/Netenergy",
    name: "新能源汽车",
    component: () => import('@/views/Netenergy/index.vue')
  },
  {
    path: "/Enrollment",
    name: "航空院校招生面试问题",
    component: () => import('@/views/Enrollment/index.vue')
  },
  {
    path: "/dainiliaojie",
    name: "航空内部席位",
    component: () => import('@/views/dainiliaojie/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
