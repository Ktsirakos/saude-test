<template>
  <div>
    <p>{{ title }}</p>
    <input :value="value" @input="changedValue" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    changedValue(value) {
      this.$emit("input", value);
      console.log(value);
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