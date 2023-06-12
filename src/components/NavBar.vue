<template>
  <div class="navbar">
    <div class="navbar__btns">
      <router-link style="margin-left: 20px; color: black" to="/users"
        >Users</router-link
      >
      <router-link style="margin-left: 20px; color: black" to="/payments"
        >Payments</router-link
      >
    </div>
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-right: auto;
}
</style>
