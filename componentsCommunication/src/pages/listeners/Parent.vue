<template>
  <div>
    <child  v-on="$listeners" @test3="handSelf"></child>
    <p>{{name}}</p>
  </div>
</template>

<script>
import Child from '@/pages/listeners/Child.vue'
export default {
  inheritAttrs: true,
  data () {
    return {
      name: 'Parent Heart'
    }
  },
  components: {
    Child
  },
  mounted () {
    this.$emit('test1')
    this.$emit('test2')
  },
  methods: {
    handSelf () {
      console.log('get msg from son')
    }
  }
}
</script>

<style>
</style>
