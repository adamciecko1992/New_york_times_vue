<template>
  <div>
    <appLayout />
  </div>
</template>

<script>
import appLayout from "./components/Layout/TheLayout";
import axios from "./axios/axios";

export default {
  name: "App",
  components: {
    appLayout,
  },
  provide: { axios },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
