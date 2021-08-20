<template>
  <div class="graphEntryWrapper">
    <h2>{{ title }}</h2>
    <div style="min-width: 500px; max-width: 500px">
      <vue3-chart-js v-bind="{ ...data }" />
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
export default {
  components: {
    Vue3ChartJs,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<style scoped>
.graphEntryWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid black;
  padding: 10px;
  border-radius: 16px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>