<template>
    <div>
        <child :title.sync="msg" ></child>
    </div>
</template>
<script>
import Child from '@/pages/sync/Child.vue'
export default{
  data () {
    return {
      msg: 'hello, my child!'
    }
  },
  components: {
    Child
  }
}
</script>
