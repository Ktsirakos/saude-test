<template>
  <div class="home">
    <HelloWorld :query="query" />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import safe from "@/store/safe";
import { extractDataForGraphs } from "../services/graphDataExtractor";

export default {
  props: {
    query: {
      type: String,
    },
  },
  components: {
    HelloWorld,
  },
  async mounted() {
    safe.initialise(this.$store);
    await safe.dispatchInitializeStore();
  },
};
</script>
