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
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="date"
          label="Number"
          width="500">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Song"
          width="400">
        </el-table-column>
        <el-table-column
          prop="time"
          label="Time"
          width="300">
        </el-table-column>
        <el-table-column
 prop="address"
 label="Play">
 <template slot-scope="scope">
   <el-tag type="primary" disable-transitions>
     <i class="el-icon-service"></i>
   </el-tag>
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
        play: '5:01'

      }, {
        date: '2',
        name: 'こんにちは',
        time: '3:09',
        play: '5:01'

      }, {
        date: '3',
        name: 'こんばんは',
        time: '4:22',
        play: '5:01'

      }, {
        date: '4',
        name: 'なぜ？',
        time: '3:34',
        play: '5:01'
      }]
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
