<template> 
  <div class="hoge">
    <el-container> 
      <el-header>
        ライブ会場特典! ~セトリでShuffle Music~
      </el-header> 
      <el-main><nuxt/></el-main> 
      <el-footer>
        <ul type="disc">
        <li>ELLEGARDEN THE BOYS ARE BACK IN TOWN TOUR 2018</li>
        </ul>
      </el-footer>
      <el-footer>
        <ul type="disc">
        <li>[出演] ELLEGARDEN, ONE OK ROCK</li>
        </ul>
      </el-footer>
      <el-footer>
        <ul type="disc">
        <li>[場所] 新木場STUDIO COAST</li>
        </ul>
      </el-footer>
      <el-footer>
        <ul type="disc">
        <li>[日付] 2018.8.8</li>
        </ul>
      </el-footer>
    </el-container> 
  </div>
</template> 

<script>
export default {
}
</script>

<style> 

.el-header { 
  background: #2980B9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-weight: 900; 
  color: #fff; 
  text-align: center; 
  line-height: 60px;
  font-family: 'Yu Gothic', cursive;
} 

.hoge {
  background: #2980B9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.el-footer { 
  background: #2980B9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-weight: 900; 
  color: #4682b4; 
  text-align: left; 
  line-height: 60px; 
  font-family: 'Yu Gothic', cursive;
} 
</style>