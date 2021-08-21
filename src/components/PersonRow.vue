<template>
  <div class="rowContainer">
    <button @click="expandEdit" class="topRow">
      <div class="name">
        {{ person.name }}
      </div>
      <div class="info">
        <p>Age: {{ person.age }}</p>
        <gender-icon :gender="gender" />
      </div>
    </button>
    <span v-if="edit" class="editFields">
      <edit-input
        v-for="field of fields"
        :title="field"
        :value="person[field]"
        @changedField="(value) => changedField(field, value)"
        :key="field"
      />
      <span>
        <p>Preferences</p>
        <edit-input
          v-for="field of Object.keys(person.preferences)"
          :title="field"
          :value="person.preferences[field]"
          @changedField="(value) => changedPreference(field, value)"
          :key="field"
        />
      </span>
      <div class="genderSelectionContainer">
        <p>gender</p>
        <span class="genderSelection">
          <span>
            <input
              @input="() => genderChanged('male')"
              v-model="gender"
              :checked="gender === 'male'"
              type="radio"
              value="male"
            />
            <label>Male</label>
          </span>
          <span>
            <input
              @input="() => genderChanged('female')"
              v-model="gender"
              :checked="gender === 'female'"
              type="radio"
              value="female"
            />
            <label>Female</label>
          </span>
        </span>
      </div>
    </span>
    <button class="editButton" v-if="edit" @click="save">Save</button>
  </div>
</template>

<script>
import { Person } from "@/datamodel";
import GenderIcon from "./GenderIcon.vue";
import EditInput from "./EditInput.vue";
import { computed } from "vue";
import safe from "../store/safe";

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
      return ["name", "age", "eyeColor"];
    });

    return {
      fields,
    };
  },
  data() {
    return {
      edit: false,
      gender: this.person.gender ? "female" : "male",
      toChange: {
        preferences: {},
      },
    };
  },
  methods: {
    expandEdit() {
      this.edit = !this.edit;
    },
    save() {
      console.log(this.toChange);
      this.toChange.preferences = {
        ...this.person.preferences,
        ...this.toChange.preferences,
      };

      debugger;
      const newPerson = {
        ...this.person.toJSON(),
        ...this.toChange,
      };

      safe.commitChangePerson(Person.prototype.fromJSON(newPerson));
      this.edit = false;
    },
    changedField(field, value) {
      console.log(field, value);
      this.toChange[field] = value;
    },
    changedPreference(field, value) {
      this.toChange.preferences[field] = value;
    },
    genderChanged(value) {
      console.log(value);
      this.gender = value;
      this.toChange.gender = value;
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

.genderSelectionContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.genderSelection span {
  margin-right: 10px;
}
</style>