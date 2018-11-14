<template>
  <div class="swiper-container">

    <div class="parallax-bg" data-swiper-parallax="-23%"></div>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <router-link :to="{ name: 'newsMore1', params: { articid: '185591_doc-ihifuvph3104669' , url:'http://sports.sina.com.cn/g/pl/2018-08-25/doc-ihifuvpf7373200.shtml'}}">
        <div class="title" data-swiper-parallax="-300"><img :src="require('./../components/img/001.jpg?1111')" alt=""></div>
        <div class="nbcon">
        <div class="subtitle" data-swiper-parallax="-200">英超-边翼造点造乌龙 阿扎尔进球切尔西2-1客胜</div>
        <div class="text" data-swiper-parallax="-100">
          <p>19赛季英超第3轮一场焦点战在圣詹姆斯公园球场展开争夺，切尔西客场2比1力克纽卡斯尔，阿隆索给阿扎尔制造点球破门机会....</p>
        </div>
        </div>
        </router-link>
      </div>
      <div class="swiper-slide">
        <router-link :to="{ name: 'newsMore1', params: { articid: '185588_doc-ihifuvpf7653798' , url:'http://sports.sina.com.cn/g/pl/2018-08-26/doc-ihifuvpf7653798.shtml'}}">
        <div class="title" data-swiper-parallax="-300" data-swiper-parallax-opacity="0"><img :src="require('./../components/img/002.jpg?1111')" alt=""></div>
        <div class="nbcon">
        <div class="subtitle" data-swiper-parallax="-200">英超-萨拉赫进球 门神救险 利物浦3战全胜领跑</div>
        <div class="text" data-swiper-parallax="-100">
          <p>利物浦3战全胜领跑。利物浦上赛季双杀布莱顿打入9球仅丢1球。布莱顿上次取胜利物浦还是1984年足总杯，联赛取胜还是1982年</p>
        </div>
        </div>
        </router-link>
      </div>
      <!-- <div class="swiper-slide">
        <router-link :to="{ name: 'newsMore1', params: { articid: '185584_doc-ihifuvpf7373200' , url:''}}">
        <div class="title" data-swiper-parallax="-300"><img :src="require('./../components/img/003.jpg?1111')" alt="http://sports.sina.com.cn/g/pl/2018-08-27/doc-ihifuvph3104669.shtml"></div>
        <div class="nbcon">
        <div class="subtitle" data-swiper-parallax="-200">英超-拉卡泽特造乌龙 黑贝进球阿森纳3-1逆转胜</div>
        <div class="text" data-swiper-parallax="-100">
          <p>自2016年1月以来，阿森纳在主场对战伦敦对手6胜3平保持不败。埃梅里仅用拉姆塞替换受伤的厄齐尔首发...</p>
        </div>
        </div>
        </router-link>
      </div> -->
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-white"></div>
    <!-- Add Navigation -->
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </div>



</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
   mounted:function(){
    this.$nextTick(function(){
    var mySwiper = new Swiper('.swiper-container', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    })
  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.swiper-container {
    width: 100%;
    height: 200px;
}
.swiper-slide{
    width:33%
}
.nbcon{
    position: absolute;
    z-index: 0;
    padding: 0.08rem 0.5rem;
    bottom:0rem;
    background:rgba(0, 0, 0, 0.5)
}
.title{
    position: absolute;
    z-index: -1;
}
.parallax-bg{
    background:url('./../components/img/banner_a01.jpg')
}
.nbcon div {
  color:#fff
}
</style>