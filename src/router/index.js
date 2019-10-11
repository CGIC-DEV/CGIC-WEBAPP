import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: '/login',
      component: resolve => require(['@/components/Login'], resolve)
    },
    {
      path: "/main",
      component: resolve => require(['@/components/Index'], resolve),
      children: [
        {
          path: 'indexpage',
          component: resolve => require(['@/components/page/IndexPage'], resolve)
        },
        {
          path:'menumgt',
          component: resolve => require(['@/components/page/MenuManagement'],resolve)
        }
      ]
    }
  ]
})
