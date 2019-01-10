<template>

  <!--预约量房团页面-->


    <div>
      <!--头部区域-->
      <header>
        <div @click="$router.go(-1)"><i></i></div>
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
    height:856/@r;
    background:url("../../assets/img/houseGroup/bg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
</style>
