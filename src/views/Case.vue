<template>


  <!--案列页面-->


  <div>
    <header>客服案列</header>

    <!--导航区域-->
    <nav>
      <div v-for="item,index in navList" :class="{active: index == navIndex}" @click.stop="changeNav(item,index)">
        <strong>{{item.name}}</strong>
      </div>
    </nav>

    <!--图片展示区-->
    <section>
      <ul class="contentList">
        <li v-for="item,index in navList" :key="index">
          <div class="contentImg">
            <img src="../assets/img/case/bg.png" alt="" @click.stop="Details(item,index)">
          </div>
          <div class="introduce clearfix">
            <a href="javascript:;" @click.stop="Details(item)">阳光水岸</a>
            <strong>THE NAME OF THE WORK</strong>
          </div>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [
          {
            className: 'simplicity',
            name: '现代简约',
            routerName: 'CaseDetails'
          },
          {
            className: 'classical',
            name: '欧式古典',
            routerName: 'CaseDetails'
          },
          {
            className: 'japanese',
            name: '现代日式',
            routerName: 'CaseDetails'
          },
          {
            className: 'chineseStyle',
            name: '新中式',
            routerName: 'CaseDetails'
          },
          {
            className: 'french',
            name: '法式',
            routerName: 'CaseDetails'
          },
        ],
        navIndex: 0,
      }
    },
    methods: {
      changeNav(item, index) {
        this.$router.push({name: 'Case',query:{index:this.navIndex,id:this.navIndex+1}})
        this.navIndex = index;
      },
      Details(item,index) {
        console.log(item)
        this.$router.push({name: item.routerName,query:{index:this.navIndex,id:this.navIndex+1}})
      }
    }
  }
</script>

<style scoped type="text/less" lang="less">
  @r: 30rem;

  /*头部导航*/
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

  nav {
    position: fixed;
    left: 0;
    top: 88/@r;
    padding-top: 13/@r;
    width: 100%;
    line-height: 71/@r;
    font-size: 24/@r;
    font-family: "微软雅黑";
    color: #333333;
    display: flex;
    padding-bottom: 26/@r;
  }

  nav div {
    width: 100%;
    float: left;
    text-align: center;
    position: relative;
  }

  nav div.active:before {
    position: absolute;
    bottom: -6/@r;
    left: 50%;
    content: '';
    width: 60/@r;
    height: 6/@r;
    background-color: #e60012;
    -webkit-border-radius: 3/@r;
    -moz-border-radius: 3/@r;
    border-radius: 3/@r;
    transform: translateX(-50%);
  }

  nav div.active {
    font-size: 30/@r;
    color: #e60012;
    font-weight: bold;
  }

  /*图片展示区*/
  section {
    position: fixed;
    top: 198/@r;
    bottom: 110/@r;
    right: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .contentImg > img {
    width: 100%;
    height: 460/@r;
    display: block;
  }

  .introduce {
    padding: 38/@r 50/@r;
    font-size: 26/@r;
    line-height: 70/@r;
    font-family: "微软雅黑";
    font-weight: bold;
    color: #333333;
  }

  .introduce > a {
    float: left;
    padding: 0 35/@r;
    border: 2/@r solid #333;
    -webkit-border-radius: 10/@r;
    -moz-border-radius: 10/@r;
    border-radius: 10/@r;
  }

  .introduce > strong {
    float: right;
  }
</style>
