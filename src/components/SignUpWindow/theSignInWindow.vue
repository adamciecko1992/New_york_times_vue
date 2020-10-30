<template>
  <base-modal :visible="visible"> </base-modal>
</template>

<script>
import baseModal from "../UI/baseModal";
export default {
  props: {
    visible: Boolean,
  },
  components: {
    baseModal,
  },
};
</script>

<style>
</style>