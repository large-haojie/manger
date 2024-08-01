<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      v-for="(item, index) in myTableTemp.tableColumn"
      :key="index"
      :fixed="item.fixed"
      :prop="item.itemAlias"
      :label="item.itemCaption"
      >
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button 
        v-for="(item, index) in myTableTemp.toolbar"
        :key="index"
        @click="handleClick(scope.row)" 
        type="text" 
        size="small
        ">
        查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props:{
      myTableTemp: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    mounted() {
      console.log(this.myTableTemp,'myTableTemp');
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
    }
  }
</script>