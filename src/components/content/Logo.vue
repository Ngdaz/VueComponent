<template>
  <div :class="withSideBar">
    <div v-if="getCollapseValue" class="py-3">
      <i class="slice">DA</i>
    </div>
    <div v-else class="py-3">
      <i class="slice">DA</i>
      <span class="logo-name">Duy Anh</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "logolayout",

  computed: {
    ...mapGetters(["getCollapseValue"]),
    withSideBar() {
      let logo = this.getCollapseValue ? "nologo" : "logo";
      return logo;
    },
  },
};
</script>

<style scoped>
.logo {
  width: 180px;
}
.nologo {
  width: 65px;
}
</style>
