<template>
    <div>
        <div class="iftop">
        <iframe ref="iframe" id="bdIframe" :src="bdTokenUrl" frameborder="0" scrolling="auto" width="100%" height="100%" ></iframe>
        </div>
    </div>
</template>

<script>
import banner from './../components/banner';
    export default {
        data() {
            return {
                bdTokenUrl: this.$route.params.url  //https://m.sporttery.cn/app/zf/fb/livelist.html  https://m.sporttery.cn/app/zf/fb/livelist.html
            }
        },
        created() {
           // this.getUrl();
            this.$nextTick(()=>{
                this.bdTokenUrl = this.$route.params.url;
            });
        },
        mounted(){
            /**
             * iframe-宽高自适应显示   
             */
            const oIframe = document.getElementById('bdIframe');
            const deviceWidth = document.documentElement.clientWidth;
            const deviceHeight = document.documentElement.clientHeight;
            oIframe.style.width =  '100%'; //数字是页面布局宽度差值
            oIframe.style.height = '100%'; //数字是页面布局高度差
        },
  components: {
    'vue-banner':banner
  },
    //     methods: {
    //         /**
    //          * 获取-外部接口信息
    //          */
    //         getUrl() {
    //             let that = this
    //             let bdUrl = {queryurl: this.$paths.bdpath+'/locate'};
    //             this.$api.getBdToken(bdUrl,function(res) {
    //                 that.bdTokenUrl = res.data.data;
    //             })
    //         },
    //    }
    }
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.child-view{
    height:90%;
}
.vrw{
  width: 100%;
}
.iftop{
    height: 100%;
    margin-bottom:80px;
    margin-top:-40px;
}
</style>
