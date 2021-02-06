<template>
  <el-container>
    <el-header>
      <topbar></topbar>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar></sidebar>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Topbar from "../content/Topbar.vue";
import Sidebar from "../content/Sidebar";
export default {
  components: {
    Topbar,
    sidebar: Sidebar,
  },
};
</script>

<style></style>
