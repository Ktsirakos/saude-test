<template>
  <div>
    <img src="" />
    <span>
      <button
        :class="selectedPage === pageNumber ? 'selected' : ''"
        v-for="pageNumber of range(1, getNumberOfPages)"
        @click="() => changedSelectedPage(pageNumber)"
        :key="pageNumber"
      >
        {{ pageNumber }}
      </button></span
    >
    <img src="" />
  </div>
</template>

<script>
import safe from "../store/safe";
import { computed } from "vue";
import { Person } from "@/datamodel";
import { Getters } from "../store/index";
export default {
  props: {
    perPage: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const range = (start, finish) => {
      console.log(start, finish);
      let array = [];
      for (var i = start; i <= finish; i++) {
        array.push(i);
      }

      return array;
    };

    return {
      range,
    };
  },
  data() {
    return {
      selectedPage: 1,
      peoplePerPage: 6,
    };
  },
  methods: {
    changedSelectedPage(value) {
      this.selectedPage = value;
      this.$emit("changed", value);
    },
  },
  computed: {
    getNumberOfPages() {
      const people = this.$store.getters[Getters.GET_ALL_PEOPLE];
      console.log(this.perPage);
      return Math.ceil(people.length / this.perPage);
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 50%;
  padding: 10px;
  font-size: 18px;
  width: 50px;
  height: 50px;
  border: 0;
  margin: 5px;
  background: inherit;
}

button.selected {
  border: 1px solid red;
}
</style>