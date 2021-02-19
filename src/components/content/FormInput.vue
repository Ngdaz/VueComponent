<template>
  <div>
    <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="right">Right</el-radio-button>
      <el-radio-button label="top">Top</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
    >
      <!-- <pre>{{ formLabelAlign }}</pre> -->
      <el-form-item label="GroupID">
        <el-input v-model="formLabelAlign.groupID"></el-input>
      </el-form-item>
      <el-form-item label="Picture">
        <el-input v-model="formLabelAlign.picture"></el-input>
      </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="Keyboard">
        <el-input v-model="formLabelAlign.keyboard"></el-input>
      </el-form-item>
      <el-form-item label="Industry">
        <el-input v-model="formLabelAlign.industry"></el-input>
      </el-form-item>
      <el-form-item label="Member">
        <el-input v-model="formLabelAlign.memebers"></el-input>
      </el-form-item>
      <el-form-item label="Post/Week">
        <el-input v-model="formLabelAlign.postperweek"></el-input>
      </el-form-item>
      <el-form-item label="A/Q">
        <el-input v-model="formLabelAlign.aAndq"></el-input>
      </el-form-item>
      <el-button
        @click="
          add();
          showAddForm();
        "
      >
        ADD
      </el-button>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

const baseURL = "http://localhost:3000/posts";

export default {
  data() {
    return {
      dataAPI: [],
      labelPosition: "right",
      formLabelAlign: {
        aAndq: "",
        groupID: "",
        picture: "",
        name: "",
        keyboard: "",
        industry: "",
        members: "",
        postperweek: "",
      },
    };
  },
  methods: {
     add() {
     try {
        const res = axios.post(baseURL, this.formLabelAlign);

      this.dataAPI = [...this.dataAPI, res.data];
     } catch(e) {
       this.errors.push(e)
     }
    },
    ...mapMutations(["showAddForm"]),
  },
};
</script>
