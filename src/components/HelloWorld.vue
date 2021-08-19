<template>
  <div class="applicationContainer">
    <header-row @changedSearchText="filterPeople" />
    <div class="mainContent">
      <person-row
        class="personRow"
        v-for="person of people"
        :name="person.name"
        :age="person.age"
        :gender="person.gender"
        :key="person.name"
      />
    </div>
    <pages-row
      :people="peopleFiltered"
      :perPage="peoplePerPage"
      @changed="pageChanged"
    />
  </div>
</template>

<script>
import PersonRow from "./PersonRow.vue";
import HeaderRow from "./HeaderRow.vue";
import PagesRow from "./PagesRow.vue";
import safe from "@/store/safe";
import { Getters } from "@/store";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import editModal from "./editModal.vue";
export default {
  components: {
    PersonRow,
    HeaderRow,
    PagesRow,
  },
  props: {
    msg: String,
  },
  setup() {
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
        scales: {
          y: {
            min: -100,
            max: 100,
            ticks: {
              callback: function (value) {
                return `${value}%`;
              },
            },
          },
        },
      },
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            label: "My First Dataset",
            backgroundColor: ["#1abc9c", "#f1c40f", "#2980b9", "#34495e"],
            data: [40, 20, 50, 10],
          },
          {
            label: "My Second Dataset",
            backgroundColor: ["#2ecc71", "#e67e22", "#9b59b6", "#bdc3c7"],
            data: [-40, -20, -10, -10],
          },
        ],
      },
    };

    return {
      barChart,
    };
  },
  data() {
    return {
      currentPage: 1,
      peoplePerPage: 6,
      searchText: undefined,
    };
  },
  computed: {
    peopleFiltered() {
      const people = this.$store.getters[Getters.GET_ALL_PEOPLE];
      console.log("Recalled");
      return people.filter((elem) => {
        if (this.searchText) {
          return elem.searchString.includes(this.searchText);
        } else {
          return elem;
        }
      });
      // .filter(
      //   (elem, index) =>
      //     index < this.currentPage * this.peoplePerPage &&
      //     index > this.currentPage - 1 * this.peoplePerPage
      // )
    },
    people() {
      return this.peopleFiltered.filter((elem, index) => {
        console.log(
          "From: ",
          (this.currentPage - 1) * this.peoplePerPage,
          "To",
          this.currentPage * this.peoplePerPage
        );

        return (
          index <= this.currentPage * this.peoplePerPage &&
          index > (this.currentPage - 1) * this.peoplePerPage
        );
      });
    },
  },
  methods: {
    pageChanged(value) {
      this.currentPage = value;
      console.log(this.currentPage);
    },
    filterPeople(value) {
      this.searchText = value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
}

.personRow {
  margin: 20px 0px;
}

.applicationContainer {
  position: relative;
}
</style>
