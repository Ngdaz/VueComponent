import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import TableView from '../views/TableView.vue'
// import AddDataTable from '../views/AddDataTable.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  }
  // {
  //   path: '/datatable',
  //   name: 'data',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/MainContent.vue'),
  //   children: [
  //     {
  //       name: 'tableview',
  //       path: 'table',
  //       component: TableView,
  //     },
  //     {
  //       name:'adddatatable',
  //       path: 'adddata',
  //       component: AddDataTable,
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
