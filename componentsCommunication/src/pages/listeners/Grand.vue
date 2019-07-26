<template>
  <div>
    <parent p-child1="child1" p-child2="child2" placeholder="244t5364" v-on:test1="test1" v-on:test2="test2"></parent>
  </div>
</template>

<script>
import Parent from '@/pages/listeners/Parent.vue'
export default {
  data () {
    return {
      name: 'Grand Wall',
      childMsg: '12345678'
    }
  },
  components: {
    Parent
  },
  methods: {
    test1 () {
      console.log('from parent')
    },
    test2 () {
      console.log('from child')
    }
  }
}
</script>

<style>
</style>
