<template>
  <div>
    <parent :hobby="hobby" :fortune="fortune" title="Tea lover" ></parent>
  </div>
</template>

<script>
import Parent from '@/pages/attrs/Parent.vue'
export default {
  data () {
    return {
      name: 'Grand Wall',
      hobby: 'Drinking Tea',
      fortune: 'A Box of Tea'
    }
  },
  components: {
    Parent
  }
}
</script>

<style>
</style>
