<template>
  <div class="rowContainer">
    <button @click="expandEdit" class="topRow">
      <div class="name">
        {{ person.name }}
      </div>
      <div class="info">
        <p>Age: {{ person.age }}</p>
        <gender-icon :gender="person.gender" />
      </div>
    </button>
    <span v-if="edit" class="editFields">
      <edit-input
        v-for="field of fields"
        :title="field"
        :value="person[field]"
        :key="field"
      />
    </span>
    <button class="editButton" v-if="edit" @click="save">Save</button>
  </div>
</template>

<script>
import { Person } from "@/datamodel";
import GenderIcon from "./GenderIcon.vue";
import EditInput from "./EditInput.vue";
import { computed } from "vue";
export default {
  components: {
    GenderIcon,
    EditInput,
  },
  props: {
    person: {
      type: Person,
      required: true,
    },
  },
  setup(props) {
    const fields = computed(() => {
      return ["name", "age", "gender", "eyeColor"];
    });

    return {
      fields,
    };
  },
  data() {
    return {
      edit: false,
    };
  },
  methods: {
    expandEdit() {
      this.edit = !this.edit;
    },
    save() {
      console.log(this.person);
    },
  },
};
</script>

<style scoped>
.rowContainer {
  min-width: 600px;
  max-width: 650px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border: solid 2px grey;
  padding: 10px;
}

.rowContainer .topRow {
  background: inherit;
  border: 0;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.rowContainer .editFields {
  height: auto;
}

.rowContainer:hover {
  border-color: red;
}

.rowContainer .name {
  font-size: 18px;
  color: black;
}

.rowContainer .info {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.rowContainer .info p {
  font-size: 18px;
}

.editButton {
  padding: 10px;
  width: 200px;
  background: blue;
  color: white;
  border-radius: 8px;
  align-self: flex-end;
}
</style>