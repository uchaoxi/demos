<template>
  <div>
    <child title="2355" name="hello"  v-on="$listeners"></child>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import Child from '@/pages/listeners/Child.vue'
export default {
  inheritAttrs: true,
  data () {
    return {
      msg: 'Parent Heart'
    }
  },
  components: {
    Child
  },
  mounted () {
    this.$emit('test2')
  }
}
</script>

<style>
</style>
