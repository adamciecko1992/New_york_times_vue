<template >
  <teleport to="body" v-if="visible">
    <div class="modal">
      <slot></slot>
      <button @click="close">Close</button>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss">
.modal {
  width: 80vw;
  height: 20vh;
  position: fixed;
  top: 20vh;
  transform: translate(-50%);
  left: 50%;
  border: 1px solid black;
  box-shadow: 0px 5px 15px 3px grey;
  background-color: blanchedalmond;
}
</style>