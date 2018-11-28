<template>
    <div class="thm">
        <div class="hmenu">
            <ul>
                <li>足球赛程</li>
            </ul>
        </div>
        <div class="iftop">
        <div class="ifhidl"></div>
        <div class="ifhidr"></div>
        <iframe ref="iframe" id="bdIframe" :src="bdTokenUrl" frameborder="0" scrolling="no" width="100%" height="100%" ></iframe>
        </div>
    </div>
</template>

<script>
//http://sports.qq.com/kbsweb/kbsshare/gamelist.htm?#nav-laliga
    export default {
        data() {
            return {
                bdTokenUrl: 'http://m.188bifen.com/' //https://m.sporttery.cn/app/zf/fb/livelist.html  https://m.sporttery.cn/app/zf/fb/livelist.html http://www.yidianzixun.com/#/?id=c2&name=%E4%BD%93%E8%82%B2
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
            oIframe.style.height = '100%'; //数字是页面布局高度差
        }
    }
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.thm{
    position:relative
}
.child-view{
    height:100%;
}
.iftop{
    height: 100%;
    margin-top:-28px;
}
.ifhidr{
    background:#fff;
    height: 0.38rem;
    width: 0.92rem;
    position: absolute;
    right: 0px;
    top:0px;
}
.ifhidl{
    background:#fff;
    height: 0.38rem;
    width: 0.81rem;
    position: absolute;
    left: 0px;
    top:0px;
}
.hmenu{
    display: block;
    clear: both;
    width: 100%;
    background:#32a746;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
    line-height: 0.46rem;
    height: 0.46rem;
}
.hmenu ul{
    width: 50%;
    margin:0px auto;
}
.hmenu ul li{
    text-align: center;
    color:#fff;
    font-size: 0.18rem;

}
</style>
