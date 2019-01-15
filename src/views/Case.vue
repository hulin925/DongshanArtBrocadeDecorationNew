<template>


  <!--案列页面-->


  <div>
    <header>客服案列</header>

    <!--导航区域-->
    <nav>
      <div ref="planImgs" class="clearfix planImg">
        <div class="Img" v-for="item,index in navList" :class="{active: item.id==navID}" @click.stop="changeNav(item,index)" :key="index">
          <strong>{{item.name}}</strong>
        </div>
      </div>
    </nav>

    <!--图片展示区-->
    <section>
      <ul class="contentList">
        <li v-for="item,index in DetailList" :key="index" @click="Details(item,index)">
          <div class="contentImg">
            <img alt="" v-lazy="item.pic" :key="item.pic">
          </div>
          <div class="introduce clearfix">
            <a href="javascript:;">{{item.village}}</a>
            <strong>{{item.miaoshu}}</strong>
          </div>
        </li>
        <li v-show="!DetailList.length">暂无数据</li>
      </ul>
    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [],
        caseList: [],
        DetailList: [],
        navID: ''
      }
    },
    created() {
      let navID = this.$route.query.id;
      this.navList = JSON.parse(sessionStorage.getItem('navList'))
      if (navID) {
        this.initDetailList(navID)
        this.navID = navID
      } else {
        let id = this.navList[0].id;
        this.navID = this.navList[0].id;
        this.initDetailList(id)
      };
      this.$nextTick(()=>{
        //独家策划滑动
        var planImgs = this.$refs.planImgs;
        var lists = planImgs.children;
        var w = 0;
        for (let i = 0; i < lists.length; i++) {
          w += lists[i].getBoundingClientRect().width;
        }

        planImgs.style.width = w + 'rem';
        let scrolls = new BScroll('nav', {
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        });
      });

    },
    methods: {
      initDetailList(id) {
        let options = new FormData()
        options.append('sid', id)
        this.$store.dispatch('initDetailList', options)
          .then(data => {
            this.DetailList = data;
          },err=>{
            this.DetailList = [];
          })
      },
      changeNav(item, index) {
        this.initDetailList(item.id);

        this.navID = item.id;
        this.$router.push({name: 'Case',query:{id: item.id}});

      },
      Details(item, index) {
        this.$router.push({name: 'CaseDetails', query: {id: item.id}})
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
    font-size: 26/@r;
    font-family: "微软雅黑";
    color: #333333;
    /*display: flex;*/
    padding-bottom: 26/@r;
    overflow:hidden;
  }
  .planImg{
    padding:0 20/@r;
  }
  nav .Img {
    width: 140/@r;
    float: left;
    height:100%;
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
    font-size: 28/@r;
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

  .contentList > li:last-of-type {
    font: 25/@r;
    line-height: 4;
    font-family: "微软雅黑";
    text-align: center;
    color: #666;
  }
</style>
