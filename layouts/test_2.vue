<template>
  <el-container>
    <el-header>サザンオールスターズ</el-header>
    <el-main><nuxt/></el-main>
    <el-footer>team B. All right reserved</el-footer>
  </el-container>
</template>

<style>
.el-header{
  font-size: xx-large;
  color: yellow;
  text-align: center;
  line-height: 60px;
  background-color: pink;
}

.el-footer{
text-align: center;
line-height: 60px;
background-color: pink;
}

.el-main{
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8360c3, #2ebf91); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8360c3, #2ebf91); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>
