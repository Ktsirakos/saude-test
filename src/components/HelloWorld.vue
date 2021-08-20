<template>
  <div class="applicationContainer">
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
      :currentPage="currentPage"
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
    PagesRow,
  },
  props: {
    query: String,
  },
  data() {
    return {
      currentPage: 1,
      peoplePerPage: 5,
      searchText: undefined,
    };
  },
  computed: {
    peopleFiltered() {
      console.log(this.query);
      const people = this.$store.getters[Getters.GET_ALL_PEOPLE];
      return people.filter((elem) => {
        if (this.query) {
          console.log(
            elem.searchString,
            this.searchText,
            elem.searchString.includes(this.query)
          );
          return elem.searchString.includes(this.query);
        } else {
          return elem;
        }
      });
    },
    people() {
      return this.peopleFiltered.filter((elem, index) => {
        return (
          index < this.currentPage * this.peoplePerPage &&
          index >= (this.currentPage - 1) * this.peoplePerPage
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
      this.currentPage = 1;
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
