<template>
  <el-dialog title="Add keyword" 
  :visible="getDialogStatus"
  :show-close="false"
  >
    {{dataEdit}}
    <el-form
      v-if="dataEdit"
      label-width="100px"
      :model="dataEdit"
      :label-position="labelPosition"
    >
      <!-- <pre>{{ dataEdit }}</pre> -->
      <el-form-item label="GroupID">
        <el-input v-model="dataEdit.groupID"></el-input>
      </el-form-item>
      <el-form-item label="Picture">
        <el-input v-model="dataEdit.picture"></el-input>
      </el-form-item> 
      <el-form-item label="Name">
        <el-input v-model="dataEdit.name"></el-input>
      </el-form-item>
      <el-form-item label="Keyboard">
        <el-input v-model="dataEdit.keyboard"></el-input>
      </el-form-item>
      <el-form-item label="Industry">
        <el-input v-model="dataEdit.industry"></el-input>
      </el-form-item>
      <el-form-item label="Member">
        <el-input v-model="dataEdit.memebers"></el-input>
      </el-form-item>
      <el-form-item label="Post/Week">
        <el-input v-model="dataEdit.postperweek"></el-input>
      </el-form-item>
      <el-form-item label="A/Q">
        <el-input v-model="dataEdit.aAndq"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="showDialog()">Close</el-button>
      <el-button
        type="primary"
        @click="
          updateTable(test)
        "
        >Confirm</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapMutations, mapState } from "vuex";
const baseURL = "http://localhost:3000/posts";
export default {
  data() {
    return {
      dataAPI: [],
      showDialogLocal: 'getAddDataVisible',
      labelPosition: "right",
      formLabelWidth: "120px",
    };
  },

  
  computed: {
    ...mapGetters(["getDialogStatus", "getRowId"]),
    ...mapState({test: (state) => state.crawl.rowID}),
    ...mapState({dataEdit: (state) => state.crawl.dataAPIEdit}),
    
  },
  methods: {
    async updateTable(id) {
     try {
        const res = await axios.put(baseURL + '/' + `${id}`, this.dataEdit);
        console.log('push du lieu da sua ',res.data);
        console.log('id', id);
      this.dataAPI = [...this.dataAPI, res.data];
     } catch(e) {
       this.errors.push(e)
     }
    },

    ...mapMutations(["showDialog"]),
  },
  
};
</script>
