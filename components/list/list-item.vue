<template>
  <!-- list-scroll 滚动内容组件
       list-card 卡片组件
  -->
  <list-scroll class="list-scroll">
     <list-card mode="base" :item="item" v-for="item in list" :key="item._id"></list-card>
   </list-scroll>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss">
  .list-scroll {
    height: 100%;
  }
</style>