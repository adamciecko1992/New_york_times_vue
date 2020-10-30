<template>
  <div class="container">
    <Header />
    <Reader />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Reader from "./components/Reader/Reader";
import axios from "./axios/axios";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Reader,
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
