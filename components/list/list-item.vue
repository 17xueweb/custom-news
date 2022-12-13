<template>
  <!-- list-scroll 滚动内容组件
       list-card 卡片组件
  -->
  <list-scroll class="list-scroll">
     <list-card mode="base"></list-card>
     <list-card mode="image"></list-card>
     <list-card mode="column"></list-card>
     <list-card mode="column"></list-card>
     <list-card mode="column"></list-card>
     <list-card mode="column"></list-card>
   </list-scroll>
</template>

<script>
</script>

<style lang="scss">
  .list-scroll {
    height: 100%;
  }
</style>