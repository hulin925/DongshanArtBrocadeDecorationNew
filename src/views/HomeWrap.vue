<template>

  <!--底部导航页面-->


  <div>
    <router-view/>
    <!--底部导航-->
    <footer class="clearfix">
      <div
        v-for="item,index in footerList"
        :class="[item.className,{active: index == footerIndex}]"
        @click.stop="changeFooterNav(item,index)"
      >
        <i></i>
        <strong>{{item.name}}</strong>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        footerList: [
          {
            className: 'home',
            name: '首页',
            routerName: 'Home'
          },
          {
            className: 'caseList',
            name: '案列',
            routerName: 'Case'
          },
          {
            className: 'budget',
            name: '预算',
            routerName: 'Budget'
          },
          {
            className: 'afterSale',
            name: '售后',
            routerName: ''
          },
        ],
        footerIndex: 0,
      }
    },
    methods: {
      changeFooterNav(item, index) {
        this.footerIndex = index;
        if( item.routerName ){
          this.$router.push({name: item.routerName})
        }
      }
    },
    mounted() {

    }
  }
</script>

<style scoped type="text/less" lang="less">
  @r: 30rem;

  /*底部导航*/
  footer {
    width: 100%;
    height: 110/@r;
    padding: 12/@r 0 7/@r 0;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 25/@r;
    line-height: 32/@r;
    font-family: "微软雅黑";
    color: #3e3a39;
    background-color:#fff;
  }

  footer div {
    float: left;
    width: 25%;
    text-align: center;
  }

  footer div i {
    display: block;
    margin: 0 auto;
  }

  footer div.active {
    color: #e60012;
  }

  .home > i {
    width: 54/@r;
    height: 54/@r;
    background: url("../assets/img/home/home.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 2/@r auto 3/@r;
  }

  .home.active > i {
    background: url("../assets/img/home/home2.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .caseList > i {
    width: 55/@r;
    height: 58/@r;
    background: url("../assets/img/home/anLi.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 1/@r auto 0;
  }

  .caseList.active > i {
    background: url("../assets/img/home/anLi2.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .budget > i {
    width: 48/@r;
    height: 48/@r;
    background: url("../assets/img/home/conputed.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 6/@r auto 5/@r;
  }

  .budget.active > i {
    background: url("../assets/img/home/conputed2.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .afterSale > i {
    width: 58/@r;
    height: 59/@r;
    background: url("../assets/img/home/afterSale.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .afterSale.active > i {
    background: url("../assets/img/home/afterSale2.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
</style>
