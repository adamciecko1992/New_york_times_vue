<template>
  <section>
    <b-pagination
      :total="total"
      :current="page"
      range-before="5"
      range-after="5"
      size="small"
      per-page="10"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      @change="handleChange"
    >
    </b-pagination>
  </section>
</template>

<script>
export default {
  data() {
    return {
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      current: 1,
    };
  },
  props: {
    total: Number,
    page: Number,
  },

  methods: {
    handleChange(pageNum) {
      this.$emit("changePage", pageNum);
    },
  },
};
</script>

<style>
</style>