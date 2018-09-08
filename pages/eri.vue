<template>
  <div>
    <div class="block">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/lfdvtBgX81U?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
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
          prop="artist"
          label="Artist"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Name">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        artist: 'ONE OK ROCK',
        name: 'I was King',
      }, {
        artist: 'ELLEGARDEN',
        name: 'Fire Cracker',
      }, {
        artist: 'ELLEGARDEN',
        name: 'Missing',
      }, {
        artist: 'ONE OK ROCK',
        name: 'Take what you want',
      }, {
        artist: 'ELLEGARDEN',
        name: 'Supernova',
      }, {
        artist: 'ONE OK ROCK',
        name: 'Mighty Long Fall',
      }, {
        artist: 'ELLEGARDEN',
        name: 'ジターバグ',
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
