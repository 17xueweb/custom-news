<template>
  <!-- 滚动组件 -->
  <!-- 滚动到底部/右边，会触发 scrolltolower 事件 -->
  <view class="scroll">
    <scroll-view scroll-y class="list-scroll" @scrolltolower="loadmore">
      <view>
        <slot></slot>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    name: "list-scroll",
    data() {
      return {

      }
    },
    methods: {
      loadmore() {
        this.$emit('loadmore')
      }
    }
  }
</script>

<style lang="scss">
  .scroll {
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;

    .list-scroll {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
