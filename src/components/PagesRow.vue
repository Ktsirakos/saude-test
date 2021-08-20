<template>
  <div>
    <img src="" />
    <span>
      <button
        :class="currentPage === pageNumber ? 'selected' : ''"
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
export default {
  props: {
    perPage: {
      type: Number,
      required: true,
    },
    people: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: Number,
      required: false,
      default: 1,
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
      peoplePerPage: 6,
    };
  },
  methods: {
    changedSelectedPage(value) {
      // this.selectedPage = value;
      this.$emit("changed", value);
    },
  },
  computed: {
    getNumberOfPages() {
      console.log(this.people);
      return Math.ceil(this.people.length / this.perPage);
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