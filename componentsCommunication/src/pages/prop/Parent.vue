<template>
    <div>
        <child :title="msg" ></child>
    </div>
</template>
<script>
import Child from '@/pages/prop/Child.vue'
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
