<template>
  <div>
    <p>child see:{{$attrs}}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
  data () {
    return {
      name: 'Child Hood'
    }
  }
}
</script>

<style>
</style>
