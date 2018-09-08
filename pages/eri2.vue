<template>
  <div>
    <div class="block">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/SpLYMzuXWKo?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
      </div>
      <i class="el-icon-service"></i>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          type="index"
          :index="indexMethod">
        </el-table-column>
        <el-table-column
          prop="play"
          label="特別音源"
          width="180">
        </el-table-column>
        <el-table-column
          prop="artist"
          label="アーティスト"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="曲名">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  layout: "plus2",
  data() {
    return {
      tableData: [{
        //play: <audio src="sample/sample.ogg" controls></audio>,
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'BLUE ENCOUNT',
        name: 'Survivor',
      }, {
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'BLUE ENCOUNT',
        name: 'DAY×DAY',
      }, {
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'BLUE ENCOUNT',
        name: 'YOU',
      }, {
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'BLUE ENCOUNT',
        name: 'LIVER',
      }, {
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'BLUE ENCOUNT',
        name: 'ONE',
      }, {
        play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'BLUE ENCOUNT',
        name: 'もっと光を',
      }, {
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'BLUE ENCOUNT',
        name: 'LAST HERO',
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
