<template>
  <div>
    <parent  v-on:test1="test1" v-on:test2="test2" v-on:test3="test3"></parent>
  </div>
</template>

<script>
import Parent from '@/pages/listeners/Parent.vue'
export default {
  data () {
    return {
      name: 'Grand Wall'
    }
  },
  components: {
    Parent
  },
  methods: {
    test1 () {
      console.log('from parent first')
    },
    test2 () {
      console.log('from parent second')
    },
    test3 () {
      console.log('from child')
    }
  }
}
</script>

<style>
</style>
