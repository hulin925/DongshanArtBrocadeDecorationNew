<template>

  <!--首页页面-->


  <div>
    <header>东山艺锦装饰</header>
    <section>
      <div class="imgBox">
        <swiper dots-position="center" :aspect-ratio="414/750">
          <swiper-item class="swiper-demo-img" v-for="(item, index) in indextop_pic_list" :key="index">
            <img :src="item">
          </swiper-item>
        </swiper>
      </div>
      <!--导航区域-->
      <nav class="clearfix">
        <div v-for="item,index in navList"
             :class="item.className"
             @click.stop="junpPage(item.InterfaceConnection)"
        >
          <i></i>
          <strong>{{item.name}}</strong>
        </div>
      </nav>

      <!--预约设计区域-->
      <div class="makeContent">
        <div class="contents clearfix">
          <div class="contentLeft" @click.stop="getActivityDetails">
            <p>免费报价</p>
            <p>获取家装预算</p>
            <img :src="initHomeDataObj.index_picone" alt="">
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
              <img :src="initHomeDataObj.index_picthree" alt="">
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
          <li v-for="item,index in styleApartmentData">
            <img alt="" v-lazy="item.pic" :key="item.pic">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>

      <!--独家策划-->
      <div class="plan">
        <div class="clearfix">
          <div class="renovation more">独家策划 <span class="caseList ">/ 最优惠的活动</span></div>
        </div>
        <div class="wrapers">
          <ul class="planImg clearfix" ref="planImgs">
            <li v-for="item,index in 4">
              <img src="../assets/img/home/Renovation.png" alt="">
            </li>
          </ul>
        </div>
      </div>

    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {Swiper, SwiperItem} from 'vux'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        initHomeDataObj: {},
        initInterface: '',
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
            InterfaceConnection: 'yuyue_pic'
          },
          {
            className: 'core',
            name: '核心优势',
            routerName: 'Core',
            InterfaceConnection: 'our_pic'
          },
          {
            className: 'aboutMe',
            name: '关于我们',
            routerName: 'Core',
            InterfaceConnection: 'about_pic'
          },
        ],
        indextop_pic_list: [],
        changeList: [
          {
            name: '风格',
            routerName: '',
            tag: 'style'
          }, {
            name: '户型',
            routerName: '',
            tag: 'housetype'
          }
        ],
        styleApartmentData: [],
        indexActive: 0,
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    mounted() {

    },
    created() {
      this.$nextTick(() => {
        //独家策划滑动
        var planImgs = this.$refs.planImgs;
        var lists = planImgs.children;
        var w = 0;
        for (let i = 0; i < lists.length; i++) {
          w += lists[i].getBoundingClientRect().width;
        }

        planImgs.style.width = w + 'rem';
        let scrolls = new BScroll('.wrapers', {
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        });
      });
      this.initData();
      this.makeAnAppointment();
      this.initListData('style').then(data => {
        this.$nextTick(() => {
          //风格户型图片滑动
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
      })
    },
    methods: {
      async initListData(tag) {
        this.styleApartmentData = await this.initStyleApartment(tag)
      },
      //获取 风格户型
      initStyleApartment(tag) {
        let options = new FormData();
        options.append('tag', tag)
        return this.$store.dispatch('initStyleApartment', options)
      },
      //获取详情大图
      initDetails(tag) {
        let options = new FormData();
        options.append('tag', tag)
        return this.$store.dispatch('initDetails', options)
      },
      //获取预约和售后
      makeAnAppointment() {
        let options = new FormData();
        options.append('tag', 'yuyue')
        console.log(this.$store.dispatch('makeAnAppointment', options));
        return this.$store.dispatch('makeAnAppointment', options)
      },
      //初始化数据
      initData() {
        this.$vux.loading.show({
          text: '加载中'
        })
        this.$store.dispatch('initHomeData')
          .then(obj => {
            this.indextop_pic_list = obj.indextop_pic_list.map(item => {
              return item[1]
            })
            this.initHomeDataObj = obj;
            this.$vux.loading.hide()
          }, err => {
            this.$vux.toast.show({
              text: err,
              type: 'cancel'
            })
            this.$vux.loading.hide()
          }).catch(err => {
          this.$vux.toast.show({
            text: err,
            type: 'cancel'
          })
          this.$vux.loading.hide()
        })
      },
      junpPage(item) {
        // this.$router.push({name: item.routerName});
        // this.$store.commit('setDecorate',1);
        this.initDetails(item);
        this.initDetails(item).then(data => {
          this.initInterface = data;
        })
        // console.log(window.location);
        // window.location.href=this.initInterface;
      },
      getActivityDetails() {
        // this.$store.commit('setDecorate',2);
        this.$router.push({name: "ActivityDetails"});
      },
      changeNav(item, index) {
        this.indexActive = index
        this.initListData(item.tag).then(() => {
          this.$nextTick(() => {
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
        })

      },
      designer() {
        this.$router.push({name: "Designer"});
      },
      houseGroup() {
        this.$router.push({name: "HouseGroup"});
      },
      Case() {
        this.$router.push({name: "Case"});
        this.$store.commit('setDecorate', 1);
      }
    },
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
    background-color: #fff;
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

  .imgBox {
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
    padding-top: 8/@r;
  }

  /*风格、户型按钮*/
  .changeNav {
    margin-top: 15/@r;
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
    top: 30/@r;
    left: 20/@r;
    right: 0;
    bottom: 0;
    font-weight: bold;
    color: #fff;
  }

  /*独家策划*/
  .plan {
    width: 100%;
    height: 354/@r;
    padding-left: 24/@r;
    border-bottom: 20/@r solid #f8f8f8;
    overflow: hidden;
  }

  .wrapers {
    width: 100%;
    height: 200/@r;
    overflow: hidden;
  }

  .planImg li {
    float: left;
    width: 410/@r;
    padding-right: 20/@r;
  }

  .planImg li img {
    width: 100%;
    height: 100%;
    -webkit-border-radius: 15/@r;
    -moz-border-radius: 15/@r;
    border-radius: 15/@r;
  }
</style>
