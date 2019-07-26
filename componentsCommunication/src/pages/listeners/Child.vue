<template>
  <div>
    <p>{{msg}}</p>
  </div>

</template>

<script>
export default {
  inheritAttrs: true,
  data () {
    return {
      msg: 'Child Hood'
    }
  },
  mounted () {
    this.$emit('test1')
  }
}
</script>

<style>
</style>
