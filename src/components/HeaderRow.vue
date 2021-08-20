<template>
  <div class="headerContainer">
    <search-bar @changed="searchTextChanged" />
    <representation-icons @changed="changeRepresentation" />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import RepresentationIcons from "./RepresentationIcons.vue";

export default {
  components: {
    SearchBar,
    RepresentationIcons,
  },
  props: {},
  data() {
    return {
      searchText: "",
      currentRepresentation: "",
    };
  },
  watch: {
    searchText(newText, oldText) {
      this.changeRepresentation(this.currentRepresentation, newText);
    },
  },
  methods: {
    changeRepresentation(value, query) {
      this.currentRepresentation = value;
      if (value === "pie") {
        this.$router.push(`/graphs?q=${query ? query : ""}`);
      } else if (value === "bar") {
        this.$router.push(`/bar-graphs?q=${query ? query : ""}`);
      } else {
        this.$router.push(`/?q=${query ? query : ""}`);
      }
    },
    searchTextChanged(value) {
      this.$emit("changedSearchText", value);
      this.searchText = value;
    },
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