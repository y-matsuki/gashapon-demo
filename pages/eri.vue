<template>
  <div id="app" style="style">
    <div class="block">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/lfdvtBgX81U?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
      </div>
      <i class="el-icon-service"></i>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          type="index"
          width="20">
        </el-table-column>
        <el-table-column
          prop="play"
          label="再生"
          width="50">
          <template slot-scope="scope">
            <el-button type="primary" @click="open(scope.row.play)" circle>
              <i class="el-icon-caret-right"></i>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="artist"
          label="アーティスト"
          >
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
  layout: "plus",
  data() {
    return {
      tableData: [{
        //play: <audio src="sample/sample.ogg" controls></audio>,
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'ONE OK ROCK',
        name: 'I was King',
      }, {
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'ELLEGARDEN',
        name: 'Fire Cracker',
      }, {
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'ELLEGARDEN',
        name: 'Missing',
      }, {
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'ONE OK ROCK',
        name: 'Take what you want',
      }, {
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'ELLEGARDEN',
        name: 'Supernova',
      }, {
        //play: <audio controls=""><source src="city.mp3" type="audio/mpeg"/></audio>,
        artist: 'ONE OK ROCK',
        name: 'Mighty Long Fall',
      }, {
        play: 'https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/121184394.m4a',
        artist: 'ELLEGARDEN',
        name: 'ジターバグ',
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
  background: #2980B9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
