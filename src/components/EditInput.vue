<template>
  <div>
    <p>{{ title }}</p>
    <input v-model="inputValue" @input="changedValue" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: String || Number,
  },
  mounted() {
    this.inputValue = this.value;
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    changedValue(value) {
      this.$emit("changedField", this.inputValue);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
}
input {
  padding: 10px;
  margin-right: 5px;
}
</style>