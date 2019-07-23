<template>
  <div>
    <parent></parent>
  </div>
</template>

<script>
import Parent from '@/pages/attrs/Parent.vue'
export default {
  data () {
    return {
      name: 'Grand Wall',
      childMsg: '12345678'
    }
  },
  components: {
    Parent
  }
}
</script>

<style>
</style>
