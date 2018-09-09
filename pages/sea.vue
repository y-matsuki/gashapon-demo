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
            prop="play"
            label="視聴"
            width="80"
            >
           <template slot-scope="scope">
             <el-button type="primary" @click="open(scope.row.play)">
     <i class="el-icon-service"></i>
   </el-button> 
   </template>
          </el-table-column>
          <el-table-column
            prop="music"
            label="曲名"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="アーティスト名"
            >
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
          play: 'https://s3-ap-northeast-1.amazonaws.com/gashapon-demo/static/HOTLIMIT.m4a',
          music: 'HOT LIMIT',
          name: 'T.M.Revolution'
          
        }, {
          play: <audio controls></audio>,
          music: 'TSUNAMI',
          name: 'サザンオールスターズ'
          
        }, {
          play: <audio controls></audio>,
          music: '睡蓮花',
          name: '湘南乃風'
          
        }, {
          play: <audio controls></audio>,
          music: 'パレオはエメラルド',
          name: 'SKE48'
          
        },{
          play: <audio controls></audio>,
          music: '海の声',
          name: '桐谷健太'
          
        },{
            play: <audio controls></audio>,
          music: 'シ－ズン・イン・ザ・サン',
          name: 'TUBE'
        
          }]
      }
    },
    methods: {
  open(name){
console.log(name)
const audioElem=new Audio()
audioElem.src=name
audioElem.play()
}
}
  }
  </script>

  <style scoped>
  .block {
    font-size: xx-large;
    text-align: center;
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
