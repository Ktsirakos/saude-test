<template>
  <div>
    <graph-entry title="Gender" :data="pieGender" />
    <graph-entry title="Eye color" :data="eyeColor" />
    <graph-entry title="Age" :data="pieAge" />
    <graph-entry title="Age" :data="barChart" />
  </div>
</template>

<script>
import { extractDataForGraphs } from "@/services/graphDataExtractor";
import GraphEntry from "./GraphEntry.vue";
import { Gender } from "@/datamodel";
export default {
  components: { GraphEntry },
  props: {},
  setup(props) {
    const graphData = extractDataForGraphs();
    const eyeColor = {
      type: "pie",
      data: {
        labels: Object.keys(graphData.eyeColor),
        datasets: [
          {
            backgroundColor: Object.keys(graphData.eyeColor),
            data: Object.values(graphData.eyeColor).map((elem) => elem.length),
          },
        ],
      },
    };

    const pieGender = {
      type: "pie",
      data: {
        labels: Object.keys(graphData.gender),
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651"],
            data: [
              graphData.gender["male"].length,
              graphData.gender["female"].length,
            ],
          },
        ],
      },
    };

    const pieAge = {
      type: "pie",
      data: {
        labels: Object.keys(graphData.age),
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: Object.values(graphData.age).map((elem) => elem.length),
          },
        ],
      },
    };

    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
      data: {
        labels: Object.keys(graphData.age),
        datasets: [
          {
            label: "Male",
            backgroundColor: ["#1abc9c"],
            data: Object.values(graphData.age).map(
              (elem) =>
                elem.filter((person) => person.gender === Gender.MALE).length
            ),
          },
          {
            label: "Female",
            backgroundColor: ["#2ecc71"],
            data: Object.values(graphData.age).map(
              (elem) =>
                elem.filter((person) => person.gender === Gender.FEMALE).length
            ),
          },
        ],
      },
    };

    return {
      pieGender,
      eyeColor,
      pieAge,
      barChart,
    };
  },
};
</script>

<style scoped>
</style>