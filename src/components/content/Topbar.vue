<template>
  <div class="navbar-header h-100 d-flex justify-content-between">
    <!-- d-flex left -->
    <div class="d-flex h-100">
      <div class="navbar-brand-box h-100 ">
        <logo></logo>
      </div>
      <div class="py-2 px-1">
        <el-button @click="menuCollapse()" icon="el-icon-s-fold"></el-button>
      </div>
      <div class="py-2 px-3">
        <el-input placeholder="Please input" v-model="input"></el-input>
      </div>
    </div>
    <div class="d-flex pr-3">
      <div class="py-2 px-2">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <div class="py-2 px-2">
        <el-button icon="el-icon-menu"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
// import { mapMutations, mapState } from "vuex";
export default {
  components: { Logo },
  data() {
    return {
      input:'',
    };
  }
};
</script>

<style scoped></style>
