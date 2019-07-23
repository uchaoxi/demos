import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SyncParent from '@/pages/sync/Parent.vue'
import BusParent from '@/pages/bus/Parent.vue'
import ChildrenParent from '@/pages/children/Parent.vue'
import AttrsGrand from '@/pages/attrs/Grand.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [{
        path: '/sync',
        name: 'Parent',
        component: SyncParent
      },
      {
        path: '/bus',
        name: 'Parent',
        component: BusParent
      },
      {
        path: '/children',
        name: 'Parent',
        component: ChildrenParent
      },
      {
        path: '/attrs',
        name: 'Parent',
        component: AttrsGrand
      }]

    }

  ]
})
