<template>
  <div class="about">
    <GraphsComponent />
  </div>
</template>

<script>
import safe from "@/store/safe";
import GraphsComponent from "../components/Graphs.vue";
export default {
  components: {
    GraphsComponent,
  },
  async mounted() {
    safe.initialise(this.$store);
    await safe.dispatchInitializeStore();
  },
};
</script>
