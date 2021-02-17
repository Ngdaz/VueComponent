<template>
  <div class="conainer-fuild">
    <div class="pb-2">
      <el-form ref="form" :model="form">
        <div class="row">
          <!-- 1 -->
          <div class="col">
            <div class="row">
              <div class="col-12">
                <h6 class="d-flex flex-start">Linh vuc</h6>
              </div>
              <div class="col-12">
                <el-form-item>
                  <el-select
                    v-model="form.acc_list"
                    class="w-100"
                    placeholder="Chon linh vuc"
                  >
                    <el-option
                      v-for="item in data_acclist"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="col">
            <div class="row">
              <div class="col-12">
                <h6 class="d-flex flex-start">Trang thai tra loi</h6>
              </div>
              <div class="col-12">
                <el-form-item>
                  <el-select
                    v-model="form.acc_list"
                    class="w-100"
                    placeholder="Tat ca trang thai tra loi"
                  >
                    <el-option
                      v-for="item in data_acclist"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="col">
            <div class="row">
              <div class="col-12">
                <h6 class="d-flex flex-start">Sap xep theo</h6>
              </div>
              <div class="col-12">
                <el-form-item>
                  <el-select
                    v-model="form.acc_list"
                    class="w-100"
                    placeholder="MemberAcount"
                  >
                    <el-option
                      v-for="item in data_acclist"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <!-- 4 -->
          <div class="col">
            <div class="row">
              <div class="col-12">
                <h6 class="d-flex flex-start">Loc theo</h6>
              </div>
              <div class="col-12 d-flex flex-start">
                <el-button type="danger">Cao Thap</el-button>
                <el-button>Thap Cao</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex justify-content-end">
            <el-button type="danger" icon="el-icon-search">Tim kiem</el-button>
            <el-button icon="el-icon-loading">Lam moi</el-button>
          </div>
        </div>
      </el-form>
    </div>
    <tableCrawl></tableCrawl>
  </div>
</template>

<script>
import tableCrawl from "../content/Table.vue";
export default {
  components: {
    tableCrawl,
  },

  data() {
    return {
      form: {
        acc_list: "",
      },
      data_acclist: "data",
    };
  },
};
</script>

<style></style>
