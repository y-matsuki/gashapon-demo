<template>
  <div>
    <div class="play" style="text-align:center">
      <p>ようこそ、湘南へ！</p>
      <br>
    <p>湘南限定プレミアムアルバムを聞いて見よう!</p>
    <br>
    <div class="video">
<iframe　src="https://www.youtube.com/embed/rmOPfwdJjZ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<div class="syonan">
      <p>湘南</p>
    </div>
</div>
<el-table
    　　:data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label=""
          width="30"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="Song"
          >
        </el-table-column>
        <el-table-column
          prop="time"
          label="Time"
          >
        </el-table-column>
        <el-table-column
          prop="play"
          label="Play">
 <template slot-scope="scope">
   <el-button type="primary" @click="open(scope.row.play)">
     <i class="el-icon-service"></i>
   </el-button>
 </template>
</el-table-column>
</el-table>
</div>
</template>

<script>
export default {
  layout: 'test_2',
  data() {
    return {
      tableData: [{
        date: '1',
        name: '君へ',
        time: '5:01',
        play: 'https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/142139386.m4a'

      }, {
        date: '2',
        name: 'こんにちは',
        time: '3:09',
        play: 'https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/142139386.m4a'

      }, {
        date: '3',
        name: 'こんばんは',
        time: '4:22',
        play: 'https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/142139386.m4a'

      }, {
        date: '4',
        name: 'なぜ？',
        time: '3:34',
        play: 'https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/142139386.m4a'
      }]
    }
},

methods: {
  open(name){
console.log(name)
const audioElem=new Audio()
audioElem.src=name
audioElem.play()
}
}
}
</script>

<style scoped>
.play{
  font-size: x-large;
  color: yellow;
}
.video {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}
.syonan{
  color: yellow;
  font-size: x-large;

}
.video iframe {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.el-table {
  width:700px;
margin-right: auto;
margin-left : auto;
}
</style>
