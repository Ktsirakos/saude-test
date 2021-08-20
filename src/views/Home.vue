<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import safe from "@/store/safe";
import { extractDataForGraphs } from "../services/graphDataExtractor";
@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  async mounted() {
    safe.initialise(this.$store);
    await safe.dispatchInitializeStore();
  }
}
</script>
