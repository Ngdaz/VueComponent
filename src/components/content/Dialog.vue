<template>
  <el-dialog title="Add keyword" :visible="getDialogStatus">
    <el-form
      :model="numberValidateForm"
      ref="numberValidateForm"
      class="demo-ruleForm"
    >
      <el-form-item
        label="Nhap keyword"
        prop="age"
        :rules="[
          { required: true, message: 'age is required' },
          { type: 'number', message: 'age must be a number' },
        ]"
      >
        <el-input
          type="Nhap Keyword"
          v-model.number="numberValidateForm.age"
          autocomplete="off"
        ></el-input>

      </el-form-item>
      <el-form-item
        label="Chon Industry"
      >
          <el-input
          type="chon industry"
          v-model.number="numberValidateForm.industry"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="showDialog()">Cancel</el-button>
      <el-button type="primary" @click="showDialog()">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "dialogAdd",
  methods: {
    ...mapMutations(["showDialog"]),
  },

  data() {
    return {
      numberValidateForm: {
        age: "",
        industry:"",
      },
      formLabelWidth: "120px",
    };
  },

  computed: {
    ...mapGetters(["getDialogStatus"]),
  },
};
</script>
