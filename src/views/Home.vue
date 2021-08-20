<template>
  <div class="home">
    <List :query="query" />
  </div>
</template>

<script>
import List from "@/components/List.vue"; // @ is an alias to /src
import safe from "@/store/safe";

export default {
  props: {
    query: {
      type: String,
    },
  },
  components: {
    List,
  },
  async mounted() {
    safe.initialise(this.$store);
    await safe.dispatchInitializeStore();
  },
};
</script>
