<template>
  <div class="modalWrapper">
    <div class="modal"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props: any) {
    return {};
  },
};
</script>

<style scoped>
.modalWrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  width: 500px;
  height: 800px;
  background: white;
  z-index: 10;
}
</style>