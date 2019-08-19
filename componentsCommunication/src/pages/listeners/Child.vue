<template>
  <div>
    <p>{{name}}</p>
  </div>

</template>

<script>
export default {
  inheritAttrs: true,
  data () {
    return {
      name: 'Child Hood'
    }
  },
  mounted () {
    this.$emit('test3')
  }
}
</script>

<style>
</style>
