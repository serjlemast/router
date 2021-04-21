<template>
  <div class="layout">
    <main-header />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'

export default {
  components: { MainHeader }
}
</script>
