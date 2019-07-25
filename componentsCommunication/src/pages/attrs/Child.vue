<template>
  <div>
    <p>{{$attrs}}</p>
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
  components: {

  }
}
</script>

<style>
</style>
