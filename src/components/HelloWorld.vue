<template>
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
  <pages-row :perPage="peoplePerPage" @changed="pageChanged" />
</template>

<script>
import PersonRow from "./PersonRow.vue";
import HeaderRow from "./HeaderRow.vue";
import PagesRow from "./PagesRow.vue";
import safe from "@/store/safe";
import { Getters } from "@/store";

export default {
  components: {
    PersonRow,
    HeaderRow,
    PagesRow,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      currentPage: 1,
      peoplePerPage: 5,
      seatchText: undefined,
    };
  },
  computed: {
    people() {
      const people = this.$store.getters[Getters.GET_ALL_PEOPLE];
      console.log('Recalled');
      return people
        .filter((elem) => {
          if (this.seatchText) {
            return elem.searchString.includes(this.searchText);
          } else {
            return elem;
          }
        })
        .filter(
          (elem, index) =>
            index <= this.currentPage * this.peoplePerPage &&
            index >= this.currentPage - 1 * this.peoplePerPage
        );
    },
  },
  methods: {
    pageChanged(value) {
      this.currentPage = value;
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
</style>
