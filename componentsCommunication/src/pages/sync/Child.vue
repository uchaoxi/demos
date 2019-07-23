<template>
    <div>{{title}}</div>
</template>
<script>

export default{
  props: ['title'],
  mounted () {
    this.$emit('update:title', 'hello, parent')
  }
}
</script>
