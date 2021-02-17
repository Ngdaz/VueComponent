<template>
  <el-container>
    <el-header>
      <topbar></topbar>
    </el-header>
    <el-container>
      <el-aside :width="withSideBar">
        <sidebar></sidebar>
      </el-aside>
      <el-main>
        <crawldatapage></crawldatapage>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Topbar from "../content/Topbar.vue";
import Sidebar from "../content/Sidebar";
import CrawlDataPage from "../content/CrawlDataPage"
import { mapGetters } from "vuex";
export default {
  components: {
    Topbar,
    sidebar: Sidebar,
    crawldatapage: CrawlDataPage,
  },
  computed: {
    ...mapGetters(["getCollapseValue"]),
    withSideBar() {
      const num = this.getCollapseValue ? 65 : 200;
      return num + "px";
    },
  },
};
</script>

<style></style>
