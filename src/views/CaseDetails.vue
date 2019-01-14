<template>


  <!--案列详情页面-->


  <div>
    <header>
      <div @click="$router.go(-1)"><i></i></div>
      <span>{{CaseDetails.title}}</span>
    </header>

    <!--设计信息-->
    <div class="resume">
      <div class="resumeContent clearfix">
        <div class="left">
          <!--<i :style="{backgroundImage:CaseDetails.head_portrait}"></i>-->
          <img src="" alt="" v-lazy="CaseDetails.head_portrait">
          <div class="info">
            <p class="name">{{CaseDetails.name}}</p>
            <P class="designer">{{CaseDetails.level}}</P>
          </div>
        </div>
        <div class="right">
          <router-link tag="span"  class="rightContent" :to="{name:'Designer'}">预约设计</router-link>
        </div>
      </div>
    </div>

    <!--轮播图-->
    <swiper v-model="swiperItemIndex" dots-position="center" :aspect-ratio="500/750">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in CaseDetails.pic_list" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>

    <!--内容信息-->
    <div class="contentInfo">
      <p class="infoTitle">{{CaseDetails.miaoshu}}</p>
      <p class="infoName">{{CaseDetails.village}}</p>
      <p class="infoDetails">{{CaseDetails.content}}
      </p>
    </div>

    <div class="free">
      <span @click.stop="getJunpUrl">免费获取装修报价</span>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from 'vux'
    export default {
        name: "case-details",
      data(){
          return {
            CaseDetails:{},
            swiperItemIndex: 1,
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
      created(){
        let id = this.$route.query.id;
        this.initData(id)
        console.log(id)
      },
      methods:{
        initData(id){
          let options = new FormData()
          options.append('id',id)
          this.$store.dispatch('initCaseDetails',options)
            .then(obj=>{
              this.CaseDetails = obj
              console.log(obj)
            })
        },
        getJunpUrl(){
          let options = new FormData();
          options.append('tag','yuyue');
          this.$store.dispatch('getMakeUrl',options)
            .then(data=>{
              window.location.href=data;
            })
        }
      }
    }
</script>

<style scoped type="text/less" lang="less">

  @r:30rem;


    /*设计信息*/
  .resume{
    margin-top:88/@r;
    height:181/@r;
    width:100%;
    padding:41/@r 24/@r;
  }
  .resumeContent{
    width:100%;
    height:100%;
  }
  .left{
    float:left;
    font-family: "微软雅黑";
  }
  .left img{
    float:left;
    display:block;
    width:100/@r;
    height:100/@r;
    background:url("../assets/img/caseDetails/info.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    border-radius: 50%;
    margin-right:40/@r;
  }
  .name{
    margin-top:5/@r;
    font-size: 30/@r;
    line-height:49/@r;
    color:#333333;
  }
  .designer{
    font-size:22/@r;
    color:#666666;
    line-height: 42/@r;
  }
  .info{
    float:left;
  }
  .right{
    float:right;
  }
  .rightContent{
    display:block;
    width:147/@r;
    height:57/@r;
    background-color:#e60012;
    border-radius:30/@r;
    color:#fff;
    font-size:22/@r;
    text-align:center;
    line-height:57/@r;
    margin-top:17/@r;
  }

  /*详细内容*/
  .contentInfo{
    width:100%;
    padding:45/@r 24/@r 0 24/@r;
    font-size: 32/@r;
    font-family: "微软雅黑";
    color:#333333;
    line-height:56/@r;
    font-weight:bold;
  }
  .contentInfo .infoDetails{
    font-size:26/@r;
    color:#666666;
    line-height:60/@r;
    font-weight: normal;
    padding-top:36/@r;
  }
  .free{
    width:702/@r;
    height:100/@r;
    background-color:#d61204;
    color:#fff;
    -webkit-border-radius: 20/@r;
    -moz-border-radius: 20/@r;
    border-radius: 20/@r;
    text-align:center;
    line-height:100/@r;
    font-size:34/@r;
    margin:67/@r auto;
  }
</style>
