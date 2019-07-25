<template>
  <div>
    <child title="2355" name="hello"  v-bind="$attrs"></child>
    <p>$attrs:{{$attrs}}</p>
  </div>
</template>

<script>
import Child from '@/pages/attrs/Child.vue'
export default {
  inheritAttrs: true,
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
