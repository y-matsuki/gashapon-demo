<template>
  <div>
    <div class="block">
      <h1>今回のイチオシ曲</h1><br>
      <h2>ロストシー/Split end</h2>
      <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-wvWBkidVqI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <i class="el-icon-share"></i>
      <el-button type="primary" icon="el-icon-search" onclick='alert("Split end/ロストシー: 以下紹介文")'>この曲は？</el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="date"
          label="曲名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="アーティスト名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="サンプル視聴">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  layout:'seaLO',
  data() {
    return {
      tableData: [{
        date: 'サンプル',
        name: 'サンプル',
        address: <audio src="sample/sample.ogg" controls></audio>
      }, {
        date: 'TSUNAMI',
        name: 'サザンオールスターズ',
        address: <audio src="https://youtu.be/SBjQ9tuuTJQ" controls></audio>
      }, {
        date: '睡蓮花',
        name: '湘南乃風',
        address: <audio src="https://youtu.be/SBjQ9tuuTJQ" controls></audio>
      }, {
        date: 'パレオはエメラルド',
        name: 'SKE48',
        address: <audio src="https://youtu.be/SBjQ9tuuTJQ" controls></audio>
      },{
        date: '海の声',
        name: '桐谷健太',
        address: <audio src="https://youtu.be/SBjQ9tuuTJQ" controls></audio>
      },{
        date: 'シ－ズン・イン・ザ・サン',
        name: 'TUBE',
        address: <audio src="https://youtu.be/SBjQ9tuuTJQ" controls></audio>
        }]
    }
  }
}
</script>

<style scoped>
.video {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}
.video iframe {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
