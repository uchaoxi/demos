<template>
  <div>
    <router-link to="/prop">prop</router-link>
    <router-link to="/refs">$refs</router-link>
    <router-link to="/children">$children</router-link>
    <router-link to="/parent">$parent</router-link>
    <router-link to="/emit">$emit</router-link>
    <router-link to="/sync">sync</router-link>
    <router-link to="/bus">bus</router-link>
    <router-link to="/vuex">vuex</router-link>
    <router-link to="attrs">$attrs</router-link>
    <router-link to="listeners">$listeners</router-link>
    <router-link to="provide">provide</router-link>
    <router-link to="inject">inject</router-link>
    <router-link to="v-model">v-model</router-link>
    <router-link to="root"> $root</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>
</style>
