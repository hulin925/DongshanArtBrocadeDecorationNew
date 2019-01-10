<template>

  <!--预约设计师-->


  <div>
    <!--头部区域-->
    <header>
      <div @click="$router.go(-1)"><i></i></div>
      <span>活动详情</span>
    </header>

    <div class="content">
      <div>
        <h2><span>预约设计 • </span>把你的形象搬进家</h2>
        <p>（免费预约首席设计师）</p>
        <div>
          <img src="../../assets/img/budget/bg2.png" alt="">
        </div>
      </div>
    </div>
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
  .content{
    margin-top:148/@r;
    width:100%;
    text-align:center;
  }
  .content img{
    width:100%;
  }
  .content h2{
    font-size:38/@r;
    font-family: "微软雅黑";
    color:#4d4c4d;
    font-weight:bold;
    line-height:67/@r;
  }
  .content h2 span{
    color:#e60012;
  }
  .content p{
    font-size:24/@r;
    font-family: "微软雅黑";
    color:#333333;
    line-height:57/@r;
    font-weight:bold;
  }
</style>
