<template>
  <div>
    <child></child>
  </div>
</template>

<script>
import Child from '@/pages/attrs/Child.vue'
export default {
  data () {
    return {
      msg: 'Parent Heart'
    }
  },
  components: {
    Child
  }
}
</script>

<style>
</style>
