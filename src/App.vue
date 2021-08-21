<template>
  <header-row @changedSearchText="filterPeople" />
  <router-view />
</template>

<script>
import HeaderRow from "./components/HeaderRow.vue";
import safe from "./store/safe";
export default {
  components: {
    HeaderRow,
  },
  async mounted() {
    safe.initialise(this.$store);
    await safe.dispatchInitializeStore();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
