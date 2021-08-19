<template>
  <div class="genderContainer">
    <span></span>
    <img :src="getIcon" />
    <div :class="getBarClass"></div>
  </div>
</template>

<script lang="ts">
import { Gender } from "@/datamodel";
import { computed } from "vue";

export default {
  props: {
    gender: {
      type: Number,
    },
  },
  setup(props: any) {
    const getIcon = computed(() =>
      props.gender === Gender.MALE ? "gender-male.svg" : "gender-female.svg"
    );

    const getBarClass = computed(() =>
      props.gender === Gender.MALE ? "male" : "female"
    );

    return {
      props,
      getIcon,
      getBarClass,
    };
  },
};
</script>

<style scoped>
.genderContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
}

.genderContainer img {
  width: 40px;
  height: 40px;
}

.genderContainer span {
  width: 1px;
  height: 90%;
  background: black;
  margin-left: 15px;
  margin-right: 15px;
}

.genderContainer .female {
  width: 10px;
  height: 90%;
  background: pink;
  border-radius: 8px;
  margin-left: 15px;
}
.genderContainer .male {
  width: 10px;
  height: 90%;
  background: blue;
  border-radius: 8px;
  margin-left: 15px;
}
</style>