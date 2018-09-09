<template> 
  <div class="hoge">
    <el-container> 
      <el-header>
        ライブ会場特典! ~セトリでShuffle Music~
      </el-header> 
      <el-main><nuxt/></el-main> 
      <el-footer>
        <ul type="disc">
        <li>BLUE ENCOUNT LIVE (LIVER'S 武道館)</li>
       </ul>
      </el-footer>
      <el-footer>
        <ul type="disc">
        <li>[出演] BLUE ENCOUNT</li>
        </ul>
      </el-footer>
      <el-footer>
        <ul type="disc">
        <li>[場所] 日本武道館</li>
        </ul>
      </el-footer>
      <el-footer>
        <ul type="disc">
        <li>[日付] 2016.10.9</li>
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
  background: #ee9ca7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #ffdde1, #ee9ca7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #ffdde1, #ee9ca7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-weight: 900; 
  color: #fff; 
  text-align: center; 
  line-height: 60px; 
  font-family: 'Yu Gothic', cursive;
} 

.hoge {
  background: #ee9ca7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #ffdde1, #ee9ca7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #ffdde1, #ee9ca7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.el-footer { 
  background: #ee9ca7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #ffdde1, #ee9ca7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #ffdde1, #ee9ca7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-weight: 900; 
  color: #ffffe6; 
  text-align: left; 
  line-height: 60px; 
  font-family: 'Yu Gothic', cursive;
} 
</style>