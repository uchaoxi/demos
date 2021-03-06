import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/pages/index.vue'
import SyncParent from '@/pages/sync/Parent.vue'
import BusParent from '@/pages/bus/Parent.vue'
import ChildrenParent from '@/pages/children/Parent.vue'
import AttrsGrand from '@/pages/attrs/Grand.vue'
import ListenersGrand from '@/pages/listeners/Grand.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      children: [{
        path: '/sync',
        component: SyncParent
      },
      {
        path: '/bus',
        component: BusParent
      },
      {
        path: '/children',
        component: ChildrenParent
      },
      {
        path: '/attrs',
        component: AttrsGrand
      },
      {
        path: '/listeners',
        component: ListenersGrand
      }
      ]
    }
  ]
})
