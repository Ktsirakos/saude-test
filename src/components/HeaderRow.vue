<template>
  <div class="headerContainer">
    <search-bar @changed="filterResults" />
    <representation-icons @changed="changeRepresentation" />
  </div>
</template>

<script lang="ts">
import { Gender } from "@/datamodel";
import { computed } from "vue";
import SearchBar from "./SearchBar.vue";
import RepresentationIcons from "./RepresentationIcons.vue";

export default {
  components: {
    SearchBar,
    RepresentationIcons,
  },
  props: {},
  setup(props: any) {
    const filterResults = (value: string) => console.log(value);
    return {
      filterResults,
    };
  },
};
</script>

<style scoped>
.headerContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>