<template>

  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :style="{backgroundImage: 'url(' + require('../assets/images/1.jpg') + ')' }"></div>
      <div class="swiper-slide" :style="{backgroundImage: 'url(' + require('../assets/images/1.jpg') + ')' }"></div>
      <div class="swiper-slide" :style="{backgroundImage: 'url(' + require('../assets/images/1.jpg') + ')' }"></div>
      <div class="swiper-slide" :style="{backgroundImage: 'url(' + require('../assets/images/1.jpg') + ')' }"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-white"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
  </div>

</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
   mounted:function(){
    this.$nextTick(function(){
          var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            effect: 'fade',
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
    })
  }
}
</script>


<style lang="scss" scoped>
@import "scss/base.scss";
     html, body {
      position: relative;
      height: 100%;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
    }
</style>