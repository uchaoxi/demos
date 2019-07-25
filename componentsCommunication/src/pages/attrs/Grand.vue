<template>
  <div>
    <parent p-child1="child1" p-child2="child2" placeholder="244t5364"></parent>
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
