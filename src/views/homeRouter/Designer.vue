<template>

  <!--预约设计师-->


  <div>
    <!--头部区域-->
    <header>
      <div><i></i></div>
      <span>活动详情</span>
    </header>

    <div class="infoImg"></div>
  </div>
</template>

<script>
  export default {
    name: "register"
  }
</script>

<style scoped type="text/less" lang="less">
  @r:30rem;
  /*内容图片区域*/
  .infoImg{
    margin-top:88/@r;
    width:100%;
    height:2073/@r;
    background:url("../../assets/img/core/bg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
</style>
