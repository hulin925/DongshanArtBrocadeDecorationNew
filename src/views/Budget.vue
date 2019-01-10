<template>

  <!--预算页面-->


  <div>
    <!--头部信息-->
    <header>获取预算</header>
    <div class="contentImg">
      <img src="../assets/img/budget/bg.png" alt="">
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
      <div class="Button">
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
      }
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

  .contentImg > img {
    margin-top: 88/@r;
    display: block;
    width: 100%;
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
    background: url("../assets/img/budget/name.png") no-repeat;
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
