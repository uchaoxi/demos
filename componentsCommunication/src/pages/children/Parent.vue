<template>
  <div>
    <child></child>
  </div>
</template>

<script>
import Child from '@/pages/children/Child.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    Child
  },
  mounted () {
    this.$children[0].msg = 'hello, child'
  }
}
</script>

<style>
</style>
