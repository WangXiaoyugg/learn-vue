<template>
  <div>
     这是商品列表页面
    <p>{{$route.params.goodsId}}</p>
    <p>{{$route.params.username}}</p>
    <!--必须写绝对地址-->
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/img">显示商品图片</router-link>
    <div class="child-router">
      <router-view ></router-view>
    </div>
    <!--<router-link to="/cart">跳转到购物车页面</router-link>-->

    <!--命名是路由带参数-->
    <router-link v-bind:to="{name:'cart',params:{cartId:123}}">跳转到购物车页面</router-link>

    <!--<button @click="jump">跳转到购物车页面</button>-->
  </div>
</template>

<script>
   export  default {
     data(){
       return {
         msg:''
       }
     },
     components:{

     },
     methods:{
       jump(){
//         this.$router.push('/cart')
//           this.$router.push({path:'/cart?goodsId=123'})
           this.$router.go(-2);
       }
     }
   }
</script>

<style>

</style>
