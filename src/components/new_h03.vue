
<template>
  <div class="newlists03" id="newlists">
        <ul class="nlist">
            <li>
                <router-link :to="{ name: 'newsMore1', params: { articid: newList.news_id , url: newList.news_url}}">
                <span class="nimg"><img :src="require('./../components/img/b_1.jpg?1111')" alt=""></span>
                <span class="newsCtn">
                    <h2 class="ntit">{{ newList.content | filter }}</h2>
                    <i class="mark2"><i class="iconfont icon-message msg"></i>{{newList.time}} {{ newList.event_name }}</i>
                </span>
                </router-link>
            </li>
        </ul>
  </div>
</template>
<script>

import axios from 'axios';
import banner from './../components/banner';
import newlists from './../components/newlists';
import { setTimeout } from 'timers';
import $ from 'jquery';
export default {
  name: 'user',
  data () {
    return {
      newList:[],
      newList1:[],
      newList2:[],
      newList3:[],
      newList4:[],
      newList5:[],
      REQUIRE: true,
      loading: false,
      num:103,
      tips:'努力加载中...',
      url1: '',
    }
  },
  created: function(){
    this.newVue(this.num);
  },
  mounted: function () {
    this.$nextTick(() => {//在下次 DOM 更新循环结束之后执行延迟回调
          document.getElementById('vrw').addEventListener('scroll',this.scrollBottom);
          this.url1 = 'https://m.sporttery.cn/app/zf/fb/livelist.html';
    })
  },
  filters:{
    filter:function(value){
        if (!value) return '';
        if (value.length > 40) {
          return value.slice(0,40) + '...';
        }
        return value;
    }
  },
  computed:{
    num01:function (){
      return this.$store.state.count;
    }
  },
  components: {
    'vue-banner':banner,
    'vue-newlists':newlists
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
          setTimeout(()=>{
            this.isloadhid();
           // this.$toast.center('清除成功');
          },2000)
      },
      isloadhid() {
        this.$store.commit('isloadhid');
      },
      newVue:function(num){
        axios.interceptors.request.use(config => {  
          this.isloadshow();      
             console.log('1');
            return config;
          }, function (error) {
            // 对请求错误做些什么
            console.log('2');
            return Promise.reject(error);
          });

        // 添加响应拦截器
        axios.interceptors.response.use(response => {
            // 对响应数据做点什么
            console.log('a3');
            this.isloadhid();  
            this.isloadhid;
           // this.$store.commit('isloadhid');
            return response;
          }, function (error) {
            console.log('4');
            // 对响应错误做点什么
            return Promise.reject(error);
          });
          
           var a=(new Date()).toLocaleDateString()//获取当前日期
           a =a.replace(/\//g,'-');//替换2017/05/03 为    2017-05-03
           var nowdate= (new Date(a))/1000;//把当前日期变成时间戳

           axios.get('static/new.json')  /// http://www.hd.me/data.php?callback=dosomething    static/news.json?num  static/news.json  http://misc.opencai.net/consts/lotts.json   /static/news.json
            .then(res => {
              console.log(typeof(res));
              
              if(localStorage.getItem('newlist')){
                  this.newList = JSON.parse(localStorage.getItem('newlist'));
              }else{
                this.newList = res.data.showapi_res_body.contentlist[0];
                localStorage.setItem('newlist',JSON.stringify(this.newList));
              }

              if(localStorage.getItem('newlist1')){
                  this.newList1 = JSON.parse(localStorage.getItem('newlist1'));
              }else{
                this.newList1 = res.data.showapi_res_body.contentlist[1];
                localStorage.setItem('newlist1',JSON.stringify(this.newList1));
              }
                          
              if(localStorage.getItem('newlist2')){
                  this.newList2 = JSON.parse(localStorage.getItem('newlist2'));
              }else{
                  this.newList2 = res.data.showapi_res_body.contentlist[2];
                  localStorage.setItem('newlist2',JSON.stringify(this.newList2));
              }
              
              if(localStorage.getItem('newlist3')){
                  this.newList3 = JSON.parse(localStorage.getItem('newlist3'));
              }else{
                this.newList3 = res.data.showapi_res_body.contentlist[6];
                localStorage.setItem('newlist3',JSON.stringify(this.newList3));
              }
              
              if(localStorage.getItem('newlist4')){
                  this.newList4 = JSON.parse(localStorage.getItem('newlist4'));
              }else{
                this.newList4 = res.data.showapi_res_body.contentlist[4];
                localStorage.setItem('newlist4',JSON.stringify(this.newList4));
              }
              
              if(localStorage.getItem('newlist5')){
                  this.newList5 = JSON.parse(localStorage.getItem('newlist5'));
              }else{
                this.newList5 = res.data.showapi_res_body.contentlist[5];
                localStorage.setItem('newlist5',JSON.stringify(this.newList5));
              }

          
              console.log(this.newList);
              if( num >= 3){
                this.tips = '加载完成';
                return;
              }
            })
            .catch(error => {
                console.log(error);
                this.REQUIRE = false;
            });
        },
        scrollBottom:function(){

          if( (($('#vrw').scrollTop() + (window.screen.height)) >  $('#newlists').height()) && this.REQUIRE == true && this.num <= 4 ){
              this.REQUIRE = false;
              this.loading = true;
              this.tips = '正在加载中';
              this.newVue(this.num);
              this.$nextTick(() => {
                this.REQUIRE = true;
                this.loading = false;
                this.num ++;
              })
          }else{
            this.loading = true;
          }
        }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.nimg{
    float: left;
    width:1.2rem;
}
.nimgbig{
    width:100%;
}
.nlist{
  display:block;
  text-align: center;
  text-align: center;
  background:#fff;
  margin-top: 8px;
}
.nlist li{
  display:block;
  margin-bottom:0.05rem;
  text-align: left;
  font-size: 0.16rem;
  color:#5b5b5b
}
.nlist li a{
  font-size: 0.16rem;
  color:#5b5b5b
}
.ntit{
  font-size: 0.16rem;
  color:#303030;
  font-weight: normal;
  height: 0.65rem;
}
.ntitbig{
  font-size: 0.18rem;
  color:#303030;
  font-weight: normal;
  margin-bottom:0.08rem;
}
.infinite-scroll{
  width: 0.5rem;
  height: 0.2rem;
  margin:0 auto;
}
.nimg img{
  width: 1.2rem;
  height:0.8rem;
}
.nimgbig img{
  width: 100%;
  height:1.2rem;
}
.newsCtn{
    float: right;
    width:2.1rem;
}
.newsCtnbig{
    width:100%;
}
.mark2{
    text-align: left;
    display: block;
    font-style: normal;
    color:#9f9f9f
}
.msg{
    padding-right: 0.01rem;
    font-size: 0.18rem;
}
</style>

