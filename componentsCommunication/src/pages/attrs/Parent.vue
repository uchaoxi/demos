<template>
  <div>
    <child :title="title" v-bind="$attrs"></child>
    <p>parent see:{{$attrs}}</p>
    <p>PROP:{{fortune}}</p>
  </div>
</template>

<script>
import Child from '@/pages/attrs/Child.vue'
export default {
  inheritAttrs: true,
  prop: ['fortune'],
  data () {
    return {
      name: 'Parent Heart',
      title: 'Son of Tea lover'
    }
  },
  components: {
    Child
  }
}
</script>

<style>
</style>
