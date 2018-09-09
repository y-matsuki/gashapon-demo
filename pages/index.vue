<template>
  <div>
    <div class="block">
      <!-- <div class="video">
        <iframe src="https://www.youtube.com/embed/nQHQWuCxXCg?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
      </div> -->
      <audio id="audio" controls v-if="source_url">
        <source :src="source_url" type="audio/mp4">
        Your browser does not support the audio tag.
      </audio>
      <el-row>
        <el-button :plain="true" type="primary" @click="open('eri')">eri</el-button>
        <el-button :plain="true" type="primary" @click="open('eri2')">eri2</el-button>
        <el-button :plain="true" type="primary" @click="open('index.mikan')">index.mikan</el-button>
        <el-button :plain="true" type="primary" @click="open('plus')">plus</el-button>
        <el-button :plain="true" type="primary" @click="open('sea')">sea</el-button>
        <el-button :plain="true" type="primary" @click="open('test')">test</el-button>
      </el-row>
      </div>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="el-icon-search">Search</el-button>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="Date"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Name"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address">
          <template slot-scope="scope">
            <el-button type="primary" @click="play(scope.row.url)">
              <i class="el-icon-delete"></i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      source_url: null,
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        url: 'https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/96007906.m4a'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        url: 'https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/96007920.m4a'
      }]
    }
  },
  methods: {
    open(name) {
      console.log(name)
      // this.$router.push(name)
    },
    play(url) {
      console.log(url)
      this.source_url = url
      Vue.nextTick(function () {
        document.getElementById('audio').play()
      })
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

div.el-row {
  margin: 0.5rem 0;
}
</style>
