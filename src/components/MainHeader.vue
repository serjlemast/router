<template>
  <header>
    <div class="container">
      <div class="links">
        <router-link :to="{ name: 'images' }"> Images </router-link>
        <router-link :to="{ name: 'upload' }"> Upload images </router-link>
        <router-link :to="{ name: 'info' }"> Info </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.auth = localStorage.getItem("auth") !== null;
  },
};
</script>



