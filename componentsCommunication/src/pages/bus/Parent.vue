<template>
    <div>
      {{msg}}
        <child></child>
    </div>
</template>
<script>
import Child from '@/pages/bus/Child.vue'
import {eventBus} from '@/common/bus.js'
export default{
  data () {
    return {
      msg: 'hello, my child!'
    }
  },
  components: {
    Child
  },
  mounted () {
    eventBus.$on('call', (msg) => {
      this.msg = msg
    })
  }
}
</script>
