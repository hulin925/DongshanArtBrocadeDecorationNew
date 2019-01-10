<template>


  <!--活动详情页-->


  <div>
    <!--头部区域-->
    <header class="clearfix">
      <div><i></i></div>
      <span>活动详情</span>
    </header>

    <!--内容图片-->
    <div class="infoImg"></div>
  </div>
</template>

<script>
  export default {
    name: "activity-details"
  }
</script>

<style scoped type="text/less" lang="less">
  @r: 30rem;

  .infoImg {
    margin-top: 88/@r;
    width: 100%;
    height: 2941/@r;
    background: url("../assets/img/activityDetails/bg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
</style>
