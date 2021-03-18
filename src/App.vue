<template>
  <div>
    <NavHead  style="position: fixed;z-index: 1000"></NavHead>
    <div style="height: 80px;"></div><!--填补定位的head高度空白-->
    <router-view></router-view>
    <HomeBottom></HomeBottom>
  </div>
</template>

<script>
  import NavHead from './components/NavHead'
  import HomeBottom from './components/HomeBottom'

export default {
  name: 'App',
  mounted () {
    window.addEventListener('unload', this.saveState)
  },
  components: {
    NavHead,
    HomeBottom
  },
  methods: {
    saveState () {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  }
}
</script>

<style scoped>
</style>
