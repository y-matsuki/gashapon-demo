<template>
  <div id="app" style="style">
    <div class="block">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/SpLYMzuXWKo?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
      </div>
      <i class="el-icon-service"></i>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          type="index"
          >
        </el-table-column>
        <el-table-column
          label="特別音源"
          width="180"
          prop="play">
          <template slot-scope="scope">
            <el-button type="danger" @click="open(scope.row.play)" v-if="scope.row.play" circle>
              <i class="el-icon-caret-right"></i>
            </el-button>
            <p v-else>---</p>
          </template>
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
        artist: 'BLUE ENCOUNT',
        name: 'DAY×DAY',
      }, {
        artist: 'BLUE ENCOUNT',
        name: 'YOU',
      }, {
        artist: 'BLUE ENCOUNT',
        name: 'LIVER',
      }, {
        artist: 'BLUE ENCOUNT',
        name: 'ONE',
      }, {
        artist: 'BLUE ENCOUNT',
        name: 'もっと光を',
      }, {
        play: 'https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/96007920.m4a',
        artist: 'BLUE ENCOUNT',
        name: 'LAST HERO',
      }],
      style: {
        '--background-color': '#ffffff'
      }
    }
  },
  methods: {
    open (name) {
      console.log(name)
      const audioElem = new Audio()
      audioElem.src = name
      audioElem.play()
    }
  }
}
</script>

<style scoped>
#app {
  background: #ee9ca7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #ffdde1, #ee9ca7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #ffdde1, #ee9ca7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

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
