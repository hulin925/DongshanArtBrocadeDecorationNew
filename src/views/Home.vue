<template>

  <!--首页页面-->


  <div>
    <header>东山艺锦装饰</header>
    <section>
      <div class="imgBox">
        <swiper v-model="swiperItemIndex" dots-position="center" :aspect-ratio="450/750">
          <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
            <img :src="item">
          </swiper-item>
        </swiper>
      </div>
      <!--导航区域-->
      <nav class="clearfix">
        <div v-for="item,index in navList" :class="item.className" @click.stop="junpPage(item)">
          <i></i>
          <strong>{{item.name}}</strong>
        </div>
      </nav>

      <!--预约设计区域-->
      <div class="makeContent">
        <div class="contents clearfix">
          <div class="contentLeft">
            <p>免费报价</p>
            <p>获取家装预算</p>
            <img src="../assets/img/home/calculator.png" alt="">
          </div>
          <div class="contentRight">
            <div class="Designer" @click="designer">
              <p class="firstText">预约设计师</p>
              <p class="twoText">一对一定制服务</p>
              <img src="../assets/img/home/designer.png" alt="">
            </div>
            <div class="Housing" @click="houseGroup">
              <p class="firstText">预约量房团</p>
              <p class="twoText">精准、高效、先进</p>
              <img src="../assets/img/home/apartment.png" alt="">
            </div>
          </div>
        </div>
      </div>

      <!--别人家的装修-->
      <div class="more" @click="Case">
        <div class="moreContent">
          <div class="renovation">别人家的装修 <span class="caseList ">/ 精挑细选的案列</span></div>
          <span class="mores">更多 ></span>
        </div>
      </div>

      <!--按钮-->
      <div class="changeNav">
        <div class="clearfix">
          <a href="javascript:;"
             v-for="item,index in changeList"
             :class="{active: index == indexActive}"
             @click.stop="changeNav(item,index)"
          >{{item.name}}</a>
        </div>
      </div>

      <!--图片滚动区域-->
      <div class="wrapper">
        <ul class="content clearfix" ref="content">
          <li v-for="item,index in 10">
            <img src="../assets/img/case/bg.png" alt="">
            <span>北欧风格{{item}}</span>
          </li>
        </ul>
      </div>

      <!--独家策划-->
      <div class="plan">
        <div class="clearfix">
          <div class="renovation more">独家策划 <span class="caseList ">/ 最优惠的活动</span></div>
        </div>
        <ul class="planImg clearfix">
          <li v-for="item,index in 3">
            <img src="../assets/img/home/Renovation.png" alt="">
          </li>
        </ul>
      </div>

    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import { Swiper, SwiperItem } from 'vux'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        navList: [
          {
            className: 'anLi',
            name: '客户案例',
            routerName: 'Case',
          },
          {
            className: 'design',
            name: '设计师',
            routerName: 'Designer',
          },
          {
            className: 'core',
            name: '核心优势',
            routerName: 'Core',
          },
          {
            className: 'aboutMe',
            name: '关于我们',
            routerName: 'Core',
          },
        ],
        changeList: [
          {
            name: '风格',
            routerName: ''
          }, {
            name: '户型',
            routerName: ''
          }
        ],
        indexActive: 0,
        demo04_list:[
          'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
          'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        ]
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      junpPage(item) {
        this.$router.push({name: item.routerName})
      },
      changeNav(item, index) {
        console.log(item)
        this.indexActive = index
      },
      designer(){
        this.$router.push({name:"Designer"});
      },
      houseGroup(){
        this.$router.push({name:"HouseGroup"});
      },
      Case(){
        this.$router.push({name:"Case"});
      }
    },
    mounted() {
      this.$nextTick(() => {
        // axios.post('/api/Iapi/user/login',JSON.stringify({
        //   username:'15884591848',
        //   password:'123456'
        // }),{
        //   headers:{
        //     'Content-type': 'application/json'
        //   }
        // })
        //   .then(data=>{
        //     console.log(data)
        //   })
        var content = this.$refs.content;
        var lis = content.children;
        var w = 0;
        for (let i = 0; i < lis.length; i++) {
          w += lis[i].getBoundingClientRect().width;
        }

        content.style.width = w + 'rem';
        let scroll = new BScroll('.wrapper', {
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        });
      });
    }
  }
</script>
<style scoped type="text/less" lang="less">
  @r: 30rem;

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
    background-color:#fff;
  }

  section {
    position: fixed;
    top: 88/@r;
    bottom: 110/@r;
    right: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .imgBox{
    width: 100%;
    height: 400/@r;
  }

  /*导航区域*/
  nav {
    margin-top: 60/@r;
    font-size: 25/@r;
    line-height: 65/@r;
    font-family: "微软雅黑";
    color: #3e3a39;
    padding-bottom: 39/@r;
    border-bottom: 20/@r solid #f8f8f8;
  }

  nav div {
    float: left;
    width: 25%;
    text-align: center;
    position: relative;
  }

  nav div:before {
    position: absolute;
    right: 0;
    top: 6/@r;
    content: '';
    height: 100/@r;
    width: 1px;
    background-color: #eaeaea;
  }

  nav div:last-of-type:before {
    display: none;
  }

  nav div i {
    display: block;
    margin: 0 auto;
  }

  .anLi > i {
    width: 61/@r;
    height: 65/@r;
    background: url("../assets/img/home/anLi.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .design > i {
    width: 81/@r;
    height: 47/@r;
    background: url("../assets/img/home/design.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 10/@r auto 8/@r;
  }

  .core > i {
    width: 59/@r;
    height: 55/@r;
    background: url("../assets/img/home/core.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 7/@r auto 3/@r;
  }

  .aboutMe > i {
    width: 26/@r;
    height: 58/@r;
    background: url("../assets/img/home/aboutWe.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 4/@r auto 3/@r;
  }

  /*预约设计区域*/
  .makeContent {
    padding: 40/@r 0;
    border-bottom: 20/@r solid #f8f8f8;
  }

  .contents {
    height: 310/@r;
    width: 702/@r;
    margin: 0 auto;
  }

  .contentLeft {
    width: 360/@r;
    height: 310/@r;
    padding: 30/@r 0 0 30/@r;
    background-color: #464855;
    color: #fff;
    position: relative;
    border-radius: 10/@r;
    float: left;
  }

  .contentLeft > p:nth-of-type(1) {
    font-size: 33/@r;
    line-height: 53/@r;
    font-family: "微软雅黑";

  }

  .contentLeft > p:nth-of-type(2) {
    font-size: 27/@r;
    line-height: 49/@r;
    font-family: "微软雅黑";
  }

  .contentLeft > img {
    width: 192/@r;
    position: absolute;
    left: 144/@r;
    top: 145/@r;
    display: block;
  }

  .contentRight {
    width: 322/@r;
    height: 100%;
    margin-left: 20/@r;
    float: left;
  }

  .Designer, .Housing {
    height: 145/@r;
    width: 322/@r;
    padding: 20/@r 0 0 21/@r;
    background-color: #f6f7fb;
    border-radius: 8/@r;
    position: relative;
  }

  .firstText {
    font-size: 25/@r;
    line-height: 45/@r;
    font-family: "微软雅黑";
    color: #333;
  }

  .twoText {
    font-size: 20/@r;
    line-height: 42/@r;
    font-family: "微软雅黑";
    color: #999;
  }

  .Designer > img {
    width: 95/@r;
    position: absolute;
    left: 205/@r;
    bottom: 0;
  }

  .Housing {
    margin-top: 20/@r;
  }

  .Housing > img {
    width: 130/@r;
    position: absolute;
    left: 185/@r;
    top: 18/@r;
  }

  /*更多*/
  .more {
    height: 110/@r;
    width: 702/@r;
    margin: 0 auto;
    padding: 30/@r 0;
  }

  .moreContent {
    width: 100%;
  }

  .renovation {
    float: left;
    font-size: 34/@r;
    font-family: "微软雅黑";
    font-weight: bold;
  }

  .renovation .caseList {
    font-size: 26/@r;
    color: #666;
  }

  .mores {
    float: right;
    color: #676767;
    font-size: 25/@r;
    padding-top:8/@r;
  }

  /*风格、户型按钮*/
  .changeNav{
    margin-top:15/@r;
  }
  .changeNav > div {
    width: 456/@r;
    height: 72/@r;
    background-color: #eaeaea;
    -webkit-border-radius: 36/@r;
    -moz-border-radius: 36/@r;
    border-radius: 36/@r;
    margin: 0 auto;
  }

  .changeNav a {
    float: left;
    width: 50%;
    text-align: center;
    font-size: 30/@r;
    line-height: 72/@r;
    font-family: "微软雅黑";
    color: #444;
    font-weight: bold;
    -webkit-border-radius: 36/@r;
    -moz-border-radius: 36/@r;
    border-radius: 36/@r;
  }

  .changeNav a.active {
    background-color: #e60012;
    color: #fff;
  }

  /*图片滑动区域*/
  .wrapper {
    width: 100%;
    height: 410/@r;
    margin-top: 40/@r;
    border-bottom: 20/@r solid #f8f8f8;
    overflow: hidden;
  }

  .content {
    padding: 0 4/@r;
  }

  .content > li {
    float: left;
    width: 340/@r;
    height: 370/@r;
    text-align: center;
    padding-left: 20/@r;
    font-size: 30/@r;
    line-height: 370/@r;
    font-family: "微软雅黑";
    position: relative;
  }

  .content > li > img {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-border-radius: 15/@r;
    -moz-border-radius: 15/@r;
    border-radius: 15/@r;
  }

  .content > li > span {
    position: absolute;
    top: 0;
    left: 20/@r;
    right: 0;
    bottom: 0;
    font-weight: bold;
    color: #fff;
  }

  /*独家策划*/
  .plan {
    width:100%;
    height: 354/@r;
    padding-left: 24/@r;
    border-bottom: 20/@r solid #f8f8f8;
    overflow:hidden;
  }
  .planImg{
    width:1300/@r;
    heigth:200/@r;
  }
  .planImg li{
    float:left;
    width:410/@r;
    margin-right:20/@r;
  }
  .planImg li img{
    width: 100%;
    height: 100%;
    -webkit-border-radius: 15/@r;
    -moz-border-radius: 15/@r;
    border-radius: 15/@r;
  }
</style>
