<template>

  <!--预约量房团页面-->


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
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 88/@r;
    font-size: 34/@r;
    line-height: 88/@r;
    font-family: "微软雅黑";
    text-align: center;
    color: #010101;
    font-weight: bold;
    border-bottom: 1px solid #fbf8f4;
    background-color:#fff;
  }
  header div{
    float:left;
    width:65/@r;
    height:100%;
    position:relative;
  }
  header i{
    display:block;
    width:19/@r;
    height:37/@r;
    background:url("../../assets/img/back.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    position:absolute;
    left:0;
    top:0;
    margin:27/@r 24/@r 24/@r 24/@r;
  }

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
