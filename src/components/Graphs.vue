<template>
  <div>
    <graph-entry title="Gender" :data="pieGender" />
    <graph-entry title="Eye color Pie" :data="eyeColor" />
    <graph-entry title="Eye color Bar" :data="eyeColorBar" />
    <graph-entry title="Age Pie" :data="pieAge" />
    <graph-entry title="Age Bar" :data="barChartAge" />

    <div>
      <h2>Preferences</h2>
      <graph-entry
        v-for="preferenceGraph of preferenceGraphs"
        :key="preferenceGraph.title"
        :title="preferenceGraph.title"
        :data="preferenceGraph.data"
      />
    </div>
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

    const eyeColorBar = {
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
        labels: Object.keys(graphData.eyeColor),
        datasets: [
          {
            label: "#People",
            backgroundColor: Object.keys(graphData.eyeColor),
            data: Object.values(graphData.eyeColor).map((elem) => elem.length),
          },
        ],
      },
    };
    const barChartAge = {
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

    const preferenceGraphs = Object.keys(graphData.preferences).map((elem) => {
      return {
        title: elem,
        data: {
          type: "pie",
          data: {
            labels: Object.keys(graphData.preferences[elem]),
            datasets: [
              {
                backgroundColor: [
                  "#41B883",
                  "#5fa9b4",
                  "#4dd360",
                  "#6e7caf",
                  "#f7fd45",
                  "#59aae7",
                  "#fb6922",
                ],
                data: Object.keys(graphData.preferences[elem]).map(
                  (option) => graphData.preferences[elem][option].length
                ),
              },
            ],
          },
        },
      };
    });

    return {
      pieGender,
      eyeColor,
      pieAge,
      barChartAge,
      eyeColorBar,
      preferenceGraphs,
    };
  },
};
</script>

<style scoped>
</style>