import Vue from 'vue'
import Router from 'vue-router'
//import Index from '@/components/Index'
//import newlists from '@/components/newlists' 
// import newsMore from '@/components/newsMore' 
// import lotts from '@/components/lotts' 
// import lottsmore from '@/components/lottsmore'
// import user from '@/components/user'
// import feedback from '@/components/feedback'
// import disclaimer from '@/components/disclaimer'
// import message from '@/components/message'
// import favorites from '@/components/favorites'

//路由懶加载
const Index = r => require.ensure([],() => r(require('@/components/Index5')), 'Index');
const Index1 = r => require.ensure([],() => r(require('@/components/Index1')), 'Index1');
const news = r => require.ensure([],() => r(require('@/components/news')), 'news');
const newlists = r => require.ensure([],() => r(require('@/components/newlists.vue')), 'newlists');
const newlists1 = r => require.ensure([],() => r(require('@/components/newlists1')), 'newlists1');
const newlists2 = r => require.ensure([],() => r(require('@/components/newlists2')), 'newlists2');
const newlists3 = r => require.ensure([],() => r(require('@/components/newlists3')), 'newlists3');
const newsMore = r => require.ensure([],() => r(require('@/components/newsMore')), 'newsMore');
const newsMore1 = r => require.ensure([],() => r(require('@/components/newsMore1')), 'newsMore1');
const lotts = r => require.ensure([],() => r(require('@/components/lotts')), 'lotts');
const lottsmore = r => require.ensure([],() => r(require('@/components/lottsmore')), 'lottsmore');
const user = r => require.ensure([],() => r(require('@/components/user')), 'user');
const feedback = r => require.ensure([],() => r(require('@/components/feedback01')), 'feedback');
const disclaimer = r => require.ensure([],() => r(require('@/components/disclaimer')), 'disclaimer');
const message = r => require.ensure([],() => r(require('@/components/message')), 'message');
const favorites = r => require.ensure([],() => r(require('@/components/favorites')), 'favorites');
const fans = r => require.ensure([],() => r(require('@/components/fans')), 'fans');
const follow = r => require.ensure([],() => r(require('@/components/follow')), 'follow');
const htmlViewSample = r => require.ensure([],() => r(require('@/components/htmlViewSample')), 'htmlViewSample');
const marquee = r => require.ensure([],() => r(require('@/components/marquee')), 'marquee');
const framePict = r => require.ensure([],() => r(require('@/components/framePict')), 'framePict');
const frameNew = r => require.ensure([],() => r(require('@/components/frameNew')), 'frameNew');
const framekj = r => require.ensure([],() => r(require('@/components/framekj')), 'framekj');
const register = r => require.ensure([],() => r(require('@/components/register')), 'register');
const login = r => require.ensure([],() => r(require('@/components/login')), 'login');
const member = r => require.ensure([],() => r(require('@/components/member')), 'member');
const vip = r => require.ensure([],() => r(require('@/components/vip')), 'vip');
const liberty = r => require.ensure([],() => r(require('@/components/liberty')), 'liberty');
const coupon = r => require.ensure([],() => r(require('@/components/coupon')), 'coupon');
const coupon1 = r => require.ensure([],() => r(require('@/components/coupon1')), 'coupon1');
const coupon2 = r => require.ensure([],() => r(require('@/components/coupon2')), 'coupon2');
const coupon3 = r => require.ensure([],() => r(require('@/components/coupon3')), 'coupon3');
const exch = r => require.ensure([],() => r(require('@/components/exch')), 'exch');
const shoper = r => require.ensure([],() => r(require('@/components/shoper')), 'shoper');


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/newlists',
      name: 'newlists',
      component: newlists
    },
    {
      path: '/framePict',
      name: 'framePict',
      component: framePict
    },
    {
      path: '/exch',
      name: 'exch',
      component: exch
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/shoper',
      name: 'shoper',
      component: shoper,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/liberty',
      name: 'liberty',
      component: liberty
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon,
      redirect: '/coupon1',
      children: [
        {
          path: '/coupon1',
          name: 'coupon1',
          component: coupon1
        },
        {
          path: '/coupon2',
          name: 'coupon2',
          component: coupon2
        },
        {
          path: '/coupon3',
          name: 'coupon3',
          component: coupon3
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/frameNew',
      name: 'frameNew',
      component: frameNew
    },
    {
      path: '/framekj',
      name: 'framekj',
      component: framekj
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      redirect: '/newlists1',
      children: [
        {
          path: '/newlists1',
          name: 'newlists1',
          component: newlists1
        },
        {
          path: '/newlists2',
          name: 'newlists2',
          component: newlists2
        },
        {
          path: '/newlists3',
          name: 'newlists3',
          component: newlists3
        }
      ]
    },{
      path: '/newlists2',
      name: 'newlists2',
      component: newlists2
    },{
      path: '/newlists3',
      name: 'newlists3',
      component: newlists3
    },
    {
      path: '/newsMore',
      name: 'newsMore',
      component: newsMore
    },
    {
      path: '/newsMore1',
      name: 'newsMore1',
      component: newsMore1
    },
    {
      path: '/lotts',
      name: 'lotts',
      component: lotts
    },{
      path:'/lottsmore',
      name:'lottsmore',
      component:lottsmore
    },{
      path:'/user',
      name:'user',
      component:user
    },{
      path:'/feedback',
      name:'feedback',
      component:feedback,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },{
      path:'/disclaimer',
      name:'disclaimer',
      component:disclaimer,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },{
      path:'/message',
      name:'message',
      component:message
    },{
      path:'/favorites',
      name:'favorites',
      component:favorites
    },{
      path:'/fans',
      name:'fans',
      component:fans
    },{
      path:'/follow',
      name:'follow',
      component:follow
    }
    ,{
      path:'/',
      name:'Index1',
      component:Index1
    }
    ,{
      path:'/htmlViewSample',
      name:'htmlViewSample',
      component:htmlViewSample
    }
    ,{
      path:'/marquee',
      name:'marquee',
      component:marquee
    }
  ]
})
