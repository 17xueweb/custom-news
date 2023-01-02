<template>
  <view class="follow">
    <!-- 导航切换 -->
    <view class="follow-tab">
    <view class="follow-tab-box">
      <view class="follow-tab-item" :class="{active: activeIndex === 0}" @click="tab(0)">
        文章
      </view>
      <view class="follow-tab-item" :class="{active: activeIndex === 1}" @click="tab(1)">
        作者
      </view>
    </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 0
      }
    },
    methods: {
      tab(index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang="scss">
page {
  height: 100%;
  display: flex;
}
.follow {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  .follow-tab {
    height: 30px;
    padding: 10px 20px;
    border: 1px solid #f5f5f5;
    .follow-tab-box {
      width: 100%;
      height: 100%;
      display: flex;
      border-radius: 5px;
      border: 1px solid $mk-base-color;
      .follow-tab-item {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666;
        font-size: 14px;
        &:first-child {
          border-right: 1px solid $mk-base-color;
        }
        &.active {
          color: $mk-base-color;
        }
      }
    }
  }
}
</style>
