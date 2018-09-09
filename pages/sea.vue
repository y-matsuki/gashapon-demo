  <template>
    <div>
      <div class="block">
        <h1>今回のイチオシ曲</h1><br>
      </div>
        <div class="block2">
          <h2>ロストシー/Split end</h2>
        </div>
        <div class="video">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/-wvWBkidVqI?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <i class="el-icon-share" onclick='alert("共有できたら良いなあ")'></i>
        <el-button type="primary" icon="el-icon-search" onclick="window.open('http://www.splitendofficial.com/')">公式サイトへ</el-button>
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="sample"
            label="サンプル視聴">
          </el-table-column>
          <el-table-column
            prop="music"
            label="曲名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="アーティスト名"
            width="180">
          </el-table-column>

        </el-table>
      </div>
  </template>

  <script>
  export default {
    layout:'seaLO',
    data() {
      return {
        tableData: [{
          sample: <audio src="https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/HOTLIMIT.m4a" controls></audio>,
          music: 'HOT LIMIT',
          name: 'T.M.Revolution'
          
        }, {
          sample: <audio src="https://www.youtube.com/embed/-wvWBkidVqI" controls></audio>,
          music: 'TSUNAMI',
          name: 'サザンオールスターズ'
          
        }, {
          sample: <audio src="https://youtu.be/SBjQ9tuuTJQ" controls></audio>,
          music: '睡蓮花',
          name: '湘南乃風'
          
        }, {
          sample: <audio src="https://youtu.be/SBjQ9tuuTJQ" controls></audio>,
          music: 'パレオはエメラルド',
          name: 'SKE48'
          
        },{
          sample: <audio src="https://youtu.be/SBjQ9tuuTJQ" controls></audio>,
          music: '海の声',
          name: '桐谷健太'
          
        },{
            sample: <audio src="https://youtu.be/SBjQ9tuuTJQ" controls></audio>,
          music: 'シ－ズン・イン・ザ・サン',
          name: 'TUBE'
        
          }]
      }
    }
  }
  </script>

  <style scoped>
  .block {
    font-size: x-large;
    font-weight: 600;
  }
  .block2 {
    font-size: large;
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
