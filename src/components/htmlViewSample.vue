<template>
    <div>
        <div class="iftop">
        <iframe ref="iframe" id="bdIframe" :src="bdTokenUrl" frameborder="0" scrolling="no" width="100%" height="2850px" ></iframe>
        </div>
    </div>
</template>

<script>
//http://sports.qq.com/kbsweb/kbsshare/gamelist.htm?#nav-laliga
    export default {
        data() {
            return {
                bdTokenUrl: 'http://m.zhibo8.cc/' //https://m.sporttery.cn/app/zf/fb/livelist.html  https://m.sporttery.cn/app/zf/fb/livelist.html http://www.yidianzixun.com/#/?id=c2&name=%E4%BD%93%E8%82%B2
            }
        },
        // created() {
        //     this.getUrl();
        //     this.$nextTick(()=>{
        //         this.getCode();
        //     });
        // },
        mounted(){
            /**
             * iframe-宽高自适应显示   
             */
            const oIframe = document.getElementById('bdIframe');
            const deviceWidth = document.documentElement.clientWidth;
            const deviceHeight = document.documentElement.clientHeight;
            oIframe.style.width =  '100%'; //数字是页面布局宽度差值
            oIframe.style.height = '2850px'; //数字是页面布局高度差
        }
    }
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.child-view{
    height:100%;
}
.iftop{
    height: 100%;
    margin-top:-88px;
}
</style>
