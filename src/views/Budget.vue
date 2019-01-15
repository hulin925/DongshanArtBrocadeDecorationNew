<template>

  <!--预算页面-->


  <div>
    <!--头部信息-->
    <header>获取预算</header>

    <!--内容区域-->
    <div class="content">
      <div class="contentImg">
        <img src="../assets/img/budget/bg1.png" alt="">
      </div>
      <div class="contentImg2">
        <h2>增项全免 项目透明</h2>
        <p>装修项目严格交底验收，杜绝漏项增项，让家装更放心。</p>
        <div>
          <img src="../assets/img/budget/bg2.png" alt="">
        </div>
      </div>
      <div class="contentImg3">
        <h2>整装全包 施工透明</h2>
        <p>装修包得全，每一个项目施工清晰明了，真正做到拎包入住。</p>
        <div>
          <img src="../assets/img/budget/bg3.png" alt="">
        </div>
      </div>
    </div>

    <!--免费报价-->
    <div class="offer">
      <span>免费报价</span>
      <span>算算我家装修多少钱</span>
    </div>

    <!--注册信息-->
    <div class="register">
      <ul class="list">
        <li
          v-for="item,index in registerList"
          class="clearfix"
          :class="item.className"
          @click.stop="changeInput(index)">
          <i></i>
          <div>
            <input type="text" :ref="'input'+index" :placeholder="item.name">
          </div>
        </li>
      </ul>
      <div class="Button" @click="changeFooterNav">
        <span>立即预约 点这里</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "budget",
    data() {
      return {
        registerList: [
          {
            className: 'name',
            name: '您的姓名'
          },
          {
            className: 'telephone',
            name: '您的联系电话'
          },
          {
            className: 'address',
            name: '您所在的小区'
          },
          {
            className: 'size',
            name: '您的房屋面积'
          },
        ]
      }
    },
    methods: {
      changeInput(index) {
        this.$refs['input' + index][0].focus();
      },
      changeFooterNav() {
        let options = new FormData();
        options.append('tag','yuyue');
        this.$store.dispatch('getMakeUrl',options)
          .then(data=>{
            window.location.href=data;
          })
      },
    }
  }
</script>

<style scoped type="text/less" lang="less">
  @r: 30rem;

  /*头部区域*/
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
    background-color: #fff;
  }


  /*内容区域*/
  .content{
    margin-top: 88/@r;
    width: 100%;
    text-align:center;
  }
  .contentImg{
    height:977/@r;
    width:100%;
    margin-bottom:33/@r;
  }
  .content img {
    width:100%;
  }
  .content h2{
    font-size:38/@r;
    font-family: "微软雅黑";
    color:#1c1a1b;
    font-weight:bold;
    line-height:91/@r;
  }
  .content p{
    font-size:24/@r;
    font-family: "微软雅黑";
    color:#333333;
    line-height:38/@r;
    padding:20/@r 0;
  }

  .offer{
    width:100%;
    height:70/@r;
    background:#000000;
    text-align:center;
    margin-top:12/@r;
    color:#fff;
    line-height:70/@r;
  }
  .offer span:nth-of-type(1){
    font-size:34/@r;
  }
  .offer span:nth-of-type(2){
    font-size:28/@r;
    padding-left:10/@r;
  }

  /*注册信息*/
  .register {
    height: 840/@r;
    width: 100%;
    padding: 10/@r 0 60/@r;
  }

  .list {
    width: 100%;
    padding-bottom: 40/@r;
  }

  .list li {
    width: 702/@r;
    margin: 30/@r auto 0;
    height: 100/@r;
    background: #fff;
    -webkit-border-radius: 10/@r;
    -moz-border-radius: 10/@r;
    border-radius: 10/@r;
    box-shadow: 1px 1px 20/@r 0 #ccc;
    padding: 32/@r 0 32/@r 30/@r;
    position: relative;
  }

  .list div {
    overflow: hidden;
  }

  .list input {
    float: left;
    width: 100%;
    border: none;
    outline: none;
    font-size: 25/@r;
    line-height: 36/@r;
    font-family: "微软雅黑";
    padding: 0 20/@r;
  }

  .list i {
    width: 31/@r;
    height: 36/@r;
    float: left;
  }

  .name i {
    background: url("../assets/img/budget/name.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .telephone i {
    background: url("../assets/img/budget/telephone.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .address i {
    background: url("../assets/img/budget/address.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .size i {
    background: url("../assets/img/budget/size.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  /*点击登录按钮*/
  .Button {
    height: 100/@r;
    width: 702/@r;
    margin: 0 auto;
    background-color: #d61204;
    -webkit-border-radius: 15/@r;
    -moz-border-radius: 15/@r;
    border-radius: 15/@r;
    text-align: center;
    line-height: 100/@r;
    font-size: 32/@r;
    font-family: "微软雅黑";
    font-weight: bold;
    color: #fff;
  }


</style>
