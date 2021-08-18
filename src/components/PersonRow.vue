<template>
  <div class="rowContainer">
    <div class="name">
      {{ name }}
    </div>
    <div class="info">
      <p>Age: {{ age }}</p>
      <gender-icon :gender="gender" />
    </div>
  </div>
</template>

<script lang="ts">
import { Gender } from "@/datamodel";
import { Options, Vue } from "vue-class-component";
import GenderIcon from "./GenderIcon.vue";
@Options({
  components: {
    GenderIcon,
  },
  props: {
    name: String,
    age: Number,
    gender: Gender,
  },
})
export default class PersonRow extends Vue {}
</script>

<style scoped>
.rowContainer {
  min-width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 650px;
  border-radius: 8px;
  border: solid 1px black;
  padding: 10px;
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
</style>