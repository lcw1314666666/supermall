<template>
    <div id="App">
      <router-view></router-view>

      <TarBar>
        <TarBarItem path='/home' activeColor='blue'>
          <template v-slot:item-icon>
            <img src="./assets/tabbarImg/img/shouye.svg" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="./assets/tabbarImg/img/shouyeActive.svg" alt="">
          </template>
          <template v-slot:item-text>
            <div>首页</div>
          </template>   
        </TarBarItem>
        <TarBarItem path="/cart" activeColor='red'>
          <template v-slot:item-icon>
            <img src="./assets/tabbarImg/img/gouwuche.svg" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="./assets/tabbarImg/img/gouwucheActive.svg" alt="">
          </template>
          <template v-slot:item-text>
            <div>购物车</div>
          </template> 
        </TarBarItem>
        <TarBarItem path="category" activeColor="green">
          <template v-slot:item-icon>
            <img src="./assets/tabbarImg/img/fenlei.svg" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="./assets/tabbarImg/img/fenleiActive.svg" alt="">
          </template>
          <template v-slot:item-text>
            <div >分类</div>
          </template> 
        </TarBarItem>
        <TarBarItem path="profile" activeColor="green">
          <template v-slot:item-icon>
            <img src="./assets/tabbarImg/img/wode.svg" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="./assets/tabbarImg/img/wodeActive.svg" alt="">
          </template>
          <template v-slot:item-text>
            <div>我的</div>
          </template> 
        </TarBarItem>
      </TarBar>
    </div>
</template>



<script>
import TarBar from './components/tabbar/tabbar.vue'
import TarBarItem from './components/tabbar/tabbarItem.vue'

export default {
  name: 'App',
  components: {
    TarBar,
    TarBarItem
  }
}
</script>

<style>

img{
  width: 24px;
  height: 24px;
  margin-top: 6px;
}
div{
  height: 24px;
  line-height: 24px;
}

</style>
