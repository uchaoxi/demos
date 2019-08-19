<template>
  <div>
    <child  v-on="$listeners"></child>
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
  }
}
</script>

<style>
</style>
