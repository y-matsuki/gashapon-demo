<template>
  <div>
    <div class="block">
      <h1>
        <font size="7" color="#ff0000">TOWER RECORDS渋谷店</font>
      </h1>
      <h2>
        <font size="4" color="#ff0000" background-color="#ffd700">SUPER☆GiRLS</font>
      </h2>

      <h3>「超絶少女☆BEST 2010～2014」</h3>

      <p>avex初のアイドルグループSUPER☆GiRLS「第1章」の集大成となるベストアルバム。2010年12月リリースデビューアルバム「超絶少女」のリード曲「みらくるが止まンないっ!」から2014年2月リリース「空色のキセキ」までのシングル＆アルバムリード曲を収録。</p>

      <ul>
        <li>
          01.みらくるが止まンないっ!<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          02.がんばって 青春<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          03.MAX! 乙女心<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          04.女子力←パラダイス<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          05.EveryBody JUMP!!<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          06.1,000,000☆スマイル<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          07.プリプリSUMMERキッス<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          08.赤い情熱<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          09.Celebration<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          10.常夏ハイタッチ<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          11.PAN-PAKA-PAN!<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          12.年下の男の子<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          13.センチメンタル・ジャーニー<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          14.ジン ジン ジンジングル<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          15.空色のキセキ<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          16.BELIEVE IN LOVE<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
        <li>
          17.アジアの純真<i class="el-icon-caret-right" type="button" onclick='alert("hogehoge")'></i>
        </li>
      </ul>
      <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RIOZ0iQYfDs?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
      </div>
     
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="title"
          label="Title"
          width="180"
          height="70">
        </el-table-column>
        <el-table-column
          prop="artist"
          label="Artist"
          width="180"
          height="70">
        </el-table-column>
        <el-table-column
          prop="time"
          label="Time"
          width="180"
          height="70">
        </el-table-column>
        <el-table-column
          prop="address"
          label="PLAY"
          width="360"
          height="70">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
  data() {
  return {
  tableData:  [{
  title: 'みらくるが止まンないっ!',
  artist: 'SUPER☆GiRLS',
  time: '04:13',
  address: 'You Can Not Play.'
  }, {
  title: 'がんばって 青春',
  artist: 'SUPER☆GiRLS',
  time: '04:36',
  address: 'You Can Not Play.'
  }, {
  title: 'MAX! 乙女心',
  artist: 'SUPER☆GiRLS',
  time: '04:35',
  address: 'You Can Not Play.'
  }, {
  title: '女子力←パラダイス',
  artist: 'SUPER☆GiRLS',
  time: '04:33',
  address: 'You Can Not Play.'
  }, {
  title: 'EveryBody JUMP!!',
  artist: 'SUPER☆GiRLS',
  time: '04:08',
  address: 'You Can Not Play.'
  }, {
  title: '1,000,000☆スマイル',
  artist: 'SUPER☆GiRLS',
  time: '04:26',
  address: 'You Can Not Play.'
  }, {
  title: 'プリプリSUMMERキッス',
  artist: 'SUPER☆GiRLS',
  time: '04:51',
  address: 'You Can Not Play.'
  }, {
  title: '赤い情熱',
  artist: 'SUPER☆GiRLS',
  time: '04:38',
  address: 'You Can Not Play.'
  }, {
  title: 'Celebration',
  artist: 'iDOL Street All Members',
  time: '05:49',
  address: <audio src="https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/13307244.m4a" controls></audio>
  }, {
  title: '常夏ハイタッチ',
  artist: 'SUPER☆GiRLS',
  time: '04:39',
  address: 'You Can Not Play.'
  }, {
  title: 'PAN-PAKA-PAN!',
  artist: 'iDOL Street All Members',
  time: '03:52',
  address: 'You Can Not Play.'
  }, {
  title: '年下の男の子',
  artist: 'キャンディーマキアート',
  time: '03:31',
  address: 'You Can Not Play.'
  }, {
  title: 'センチメンタル・ジャーニー',
  artist: '前島亜美',
  time: '03:08',
  address: 'You Can Not Play.'
  }, {
  title: 'ジン ジン ジンジングル',
  artist: 'トゥインクルヴェール',
  time: '03:37',
  address: 'You Can Not Play.'
  }, {
  title: '空色のキセキ',
  artist: 'SUPER☆GiRLS',
  time: '05:07',
  address: 'You Can Not Play.'
  }, {
  title: 'BELIEVE IN LOVE',
  artist: 'SUPER☆GiRLS',
  time: '03:57',
  address: 'You Can Not Play.'
  }, {
  title: 'アジアの純真',
  artist: 'SUPER☆GiRLS',
  time: '03:59',
  address: 'You Can Not Play.'
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
