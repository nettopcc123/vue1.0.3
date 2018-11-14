<template>
  <div id="app">
    <!-- <div class="header" v-if="isBanner">大乐透走势规则助手</div> -->
    <vue-header v-if="isHeard"></vue-header>
    <div style="position:restive" v-if="isload">
        <loading class="showload"></loading>
        <div class="bg" @click="isloadhid"></div>
    </div>
    <div style="position:restive" v-if="isalert">
        <alert class="showalert"></alert>
        <div class="bg" @click="isalerthid"></div>
    </div>
    <div class="vrw" id="vrw">
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
    <vue-footer></vue-footer>
    <!-- <div class="footer">
        <ul>
            <li>
                <router-link :to="{ name: 'Index1'}">
                    <i class="iconfont icon-home fico"></i>
                    <p>资讯大厅</p>
                </router-link>
             </li>
            <li >
                <router-link :to="{ name: 'news'}" v-bind:class="{ active: isNews }">
                    <i class="iconfont icon-news fico"></i>
                    <p>热点新闻</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'htmlViewSample'}">
                    <i class="iconfont icon-info fico"></i>
                    <p>足球资讯</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'user'}"  v-bind:class="{ active: isActive }">
                    <i class="iconfont icon-user fico"></i>
                    <p>用户中心</p>
                </router-link>
            </li>
        </ul>
    </div> -->
  </div>
</template>
<script>
import axios from 'axios';
import loading from '@/components/loading';
import alert from '@/components/alert';
import header from '@/components/header';
import footer from '@/components/footer04';


export default {
  name: 'App',
    data(){  
        return{  
            transitionName: 'slide-left', 
            isActive: false,
            isNews: false,
            isBanner: false,
            isHeard: true,
            isMore01: true
        }  
    },
　　watch: {
　　　'$route' (to, from) {
       var isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退
　　　　　　if(isBack) {
　　　　　　　this.transitionName = 'slide-right';
　　　　　　} else {
　　　　　　 this.transitionName = 'slide-left';
　　　　　}
　　    this.$router.isBack = false;
　　},
    $route(to,from){
        if(to.path == '/newsMore1'){ //用户中心
            this.isMore01 = true;
        }else{
            this.isMore01 = false;
        }
        if(to.path == '/vip' || to.path == '/liberty' || to.path == '/coupon'){ //用户中心
            this.isHeard = false;
        }else{
            this.isHeard = true;
        }
        if(to.path == '/newsMore' || to.path == '/newlists1' || to.path == '/newlists2' || to.path == '/newlists3'){ //新闻中心
            this.isNews = true;
            this.isBanner = false;
        }else{
            this.isNews = false;
            this.isBanner = true;
        }
        if(to.path != from.path){ //滚动条置顶 //路由跳转方法
           document.getElementById('vrw').scrollTop = 0;
           this.ismenuhid();
        }        
    },
　 },
   components:{
      loading,
      alert,
      'vue-header':header,
      'vue-footer':footer
   },
  mounted:function(){
      this.$nextTick(() => {//在下次 DOM 更新循环结束之后执行延迟回调
        // this.fetchDatas(1,3);
      })
  },
  computed:{
    isload(){
        return this.$store.state.isload;
    },
    isalert(){
        return this.$store.state.isalert;
    },
    ismenu(){
        return this.$store.state.ismenu;
    }
  },
  methods:{
    isalertshow() {
       this.$store.commit('isalertshow');
    },
    isalerthid() {
       this.$store.commit('isalerthid');
    },
    isloadshow() {
        this.$store.commit('isloadshow');
    },
    isloadhid() {
        this.$store.commit('isloadhid');
    },
    ismenuhid() {
        this.$store.commit('ismenuhid');
    }
  }
}
</script>

<style lang="scss">
@import "base.scss";
@media screen and (min-width: 320px) {
    html {
        font-size: 85px;
    }
}
@media screen and (min-width: 360px) {
    html {
        font-size: 96px;
    }
}
@media screen and (min-width: 375px) {
    html {
        font-size: 100px;
    }
}
@media screen and (min-width: 400px) {
    html {
        font-size: 106px;
    }
}
@media screen and (min-width: 440px) {
    html {
        font-size:117px;
    }
}
@media screen and (min-width: 480px) {
    html {
        font-size: 128px;
    }
}
@media screen and (min-width: 640px) {
    html {
        font-size: 170px;
    }
}
@media screen and (min-width: 750px) {
    html {
        font-size: 200px;
    }
}
html {
    font-size: 26.66vw;/* 表达式：100*100vw/320 */
    height: 100%;
}
body{
    height:100%;
    background:#eaeaea;
    overflow-x: hidden;
}


body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, button,th, td ,a ,span{
	margin:0;
    padding:0;
    font-family: '';
    font-size:0.12rem;
}
table {
	border-collapse:collapse;
	border-spacing:0;
}
fieldset, img {
	border:0;
}
address, caption, cite, code, dfn, em, strong, th, var {
	font-style:normal;
	font-weight:normal;
}
ol, ul ,li{
  list-style:none;
  margin:0;
  padding:0;
}
q:before, q:after {
	content:'';
}
abbr, acronym {
	border:0;
}
textarea:focus, input:focus{
    outline:none;
}
img{
    max-height:100%;max-width: 100%;
}
button{
    cursor:pointer;
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.16rem;
    display: inline-block;
    border-radius: 0.04rem;
    text-decoration: none;
    text-align: center;  
    border:0px;
    outline: none;
    background: $bgColor;
    color:#fff;
    
}
button.butCur{
    border:1px solid #999!important;
    background:#662;
    color:$bgColor!important;
}
a{
    text-decoration:none;
}

input:not([type]), input[type="email"], input[type="number"], input[type="password"], input[type="tel"], input[type="url"], input[type="text"] {
    padding: 0.02rem 0.02rem;
    outline: none;
    border-radius:0.04rem;
    width: 100%;
}
input {
    -webkit-appearance: textfield;
    -webkit-rtl-ordering: logical;
    user-select: text;
    cursor: auto;
    padding: 1px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
}
input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus {box-shadow:0 0 0 60px #fff inset;}
input, textarea, select, button {
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0rem;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0rem;
}
input, textarea, select, button, meter, progress {
    -webkit-writing-mode: horizontal-tb;
}
button{
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 0.01rem solid transparent;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 0.16rem;
    border-radius: 0.04rem;
    transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    /* color: #515a6e;
    background-color: #fff;
    border-color: #dcdee2; */
    color: #fff;
    background-color: #8781a5;
    border-color: #736b96
}
@font-face {
  font-family: 'iconfont';  /* project id 880675 */
  src: url('//at.alicdn.com/t/font_880675_40d6e69mymj.eot');
  src: url('//at.alicdn.com/t/font_880675_40d6e69mymj.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_880675_40d6e69mymj.woff') format('woff'),
  url('//at.alicdn.com/t/font_880675_40d6e69mymj.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_880675_40d6e69mymj.svg#iconfont') format('svg');
}
.iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.icon-home:before {
    content: "\e60b";
}
.icon-news:before {  
    content: "\e7c3";
}
.icon-news01:before {  
    content: "\e60c";
}
.icon-info:before {
    content: "\e600";
}
.icon-user:before {
    content: "\e639";
}
.icon-next:before {
    content: "\e620";
}
.icon-next01:before {
    content: "\e65e";
}
.icon-zoushi:before {
    content: "\e605";
}
.icon-menu:before {
    content: "\e726";
}
.icon-message:before {
    content: "\e60e";
}
.icon-ml01:before {
    content: "\e601";
}
.icon-ml02:before {
    content: "\e61b";
}
.icon-ml03:before {
    content: "\e61b";
}
.icon-ml04:before {
    content: "\e61b";
}
.icon-sz:before {
    content: "\e640";
}
.icon-reg:before {
    content: "\e606";
}
.icon-psd:before {
    content: "\e614";
}
.icon-ball:before {
    content: "\e60d";
}
.icon-feedback:before {
    content: "\e652";
}
.icon-favorite:before {
    content: "\e623";
}
.icon-follow:before {
    content: "\e662";
}
.icon-fans:before {
    content: "\e629";
}
.icon-exc:before {
    content: "\e687";
}
.icon-birthday:before {
    content: "\e689";
}
.icon-gift:before {
    content: "\e6b8";
}

.icon-feedback01:before {
    content: "\e62e";
}
.icon-member:before {
    content: "\e715";
}
.icon-shopping:before {
    content: "\e680";
}
.icon-statement:before {  
    content: "\e61f";
}
.icon-notice:before {
    content: "\e636";
}
.icon-collection:before {
    content: "\e630";
}
.icon-clean:before {
    content: "\e609";
}
.fico{
    display: block;
    font-size:0.2rem;
    margin-top:0.05rem;
    margin-bottom:0.02rem;
}

#app{
    height: 100%;
    width: 100%;
}
.header{
    display: block;
    line-height: 0.56rem;
    background:$bgColor;
    color:#fff;
    text-align: center;
    font-size: 0.2rem;
    font-weight: bold;
    height: 8%;
}


.itit{
    display: block;
    line-height: 0.36rem;
    border-left: 0.03rem solid $bgColor;
    padding-left:0.15rem;
    font-size: 0.18rem;
    text-align: left;
}
.itit a{
    float:right;
    padding-right:10px;
    color:#999;
    font-weight: normal
}
.nlist{
    display: block;
    padding:0.1rem 0rem;
}
.nlist li{
    display: block;
    overflow: hidden;
    padding:0px 0.1rem
}
.vrw{
    position:relative;
    z-index: 0;
    height: 100%;
    overflow-x: hidden;
    width: 100%;
}
.child-view {  
  position: absolute;  
  left: 0;  
  top: 0;  
  width: 100%;  
  transition: all .5s cubic-bezier(.55,0,.1,1);  
}  
.slide-left-enter, .slide-right-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(30px, 0);  
  transform: translate(30px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
  opacity: 0;  
  -webkit-transform: translate(-30px, 0);  
  transform: translate(-30px, 0);  
}
.bg{
    background:rgba(0,0,0,0.4);
    left:0;top:0;
    filter:"Alpha(opacity=40)";
    opacity:0.4;
    display:block;
    width:100%;
    position:fixed;
    top:0;
    z-index:10;
    width: 100%;
    height: 100%;
}
.clear{
    clear: both;
    border:none!important;
    width: 0rem!important;
    height: 0rem!important;
}
</style>
