<template>
  <div class="iconsContainer">
    <button
      @click="() => selectRepresentation('list')"
      :class="selected === 'list' ? 'selected' : ''"
    >
      <img src="list-line.svg" />
    </button>
    <button
      @click="() => selectRepresentation('pie')"
      :class="selected === 'pie' ? 'selected' : ''"
    >
      <img src="pie-chart-outlined.svg" />
    </button>
    <button
      @click="() => selectRepresentation('bar')"
      :class="selected === 'bar' ? 'selected' : ''"
    >
      <img src="chart-bar.svg" />
    </button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      selected: "list",
    };
  },
  methods: {
    selectRepresentation(value) {
      this.$emit("changed", value);
      this.selected = value;
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<style scoped>
.iconsContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 180px;
  justify-content: space-evenly;
}

.iconsContainer button {
  border: 0;
  background: inherit;
}

.iconsContainer button.selected {
  border-bottom: 2px solid red;
}

img {
  width: 30px;
  height: 40px;
}
</style>