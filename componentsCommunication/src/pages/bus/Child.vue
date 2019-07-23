<template>
    <button @click="callFather">emit msg</button>
</template>
<script>
import {eventBus} from '@/common/bus.js'
export default{
  methods: {
    callFather () {
      eventBus.$emit('call', 'hello, parent')
    }
  }
}
</script>
