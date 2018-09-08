<template>
  <div>
    <div class="play" style="text-align:center">
      <p>ようこそ、湘南へ！</p>
      <br>
    <p>湘南限定プレミアムアルバムを聞いて見よう!</p>
    <br>
    <div class="block">
      <p>アルバムタイトル</p>
      <br>
  <ul>
        <li>君へ<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i></li>
        <li>こんにちは<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i></li>
        <li>こんばんは<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i></li>
        <li>愛してる<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i></li>
        <li>明日へ<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i></li>
        <li>この思い<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i></li>
  </ul>
</div>
</div>
      <div class="video">
<iframe　src="https://www.youtube.com/embed/rmOPfwdJjZ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
  </div>
</template>

<script>
export default {
  layout: 'test_2',
  data() {
    return {
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
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  }
}
</script>

<style scoped>
.play{
  font-size: x-large;

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
