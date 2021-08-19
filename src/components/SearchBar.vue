<template>
  <div class="searchBarContainer">
    <img src="search.svg" />
    <input v-model="value" @input="emitValue" placeholder="Search results..." />
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      value: "",
    };
  },
  methods: {
    emitValue() {
      this.$emit("changed", this.value);
    },
  },
};
</script>

<style scoped>
.searchBarContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
}

input {
  width: 400px;
  height: 40px;
  border: 0;
  border-bottom: 2px solid red;
}

img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>