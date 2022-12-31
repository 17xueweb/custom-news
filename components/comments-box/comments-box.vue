<template>
  <view class="comments-box">
    <view class="comments-header">
      <view class="comments-header-logo">
        <image src="../../static/logo.png" mode="aspectFill"></image>
      </view>
      <view class="comments-header-info">
        <view class="title">
          meHaotian
        </view>
        <view class="">
          2022-12-31 11:11:11
        </view>
      </view>
    </view>
    <view class="comments-content">
      <view class="">
        uni-app 是一个很棒的前端开发框架
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"comments-box",
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.comments-box {
  margin: 15px 0;
  .comments-header {
    display: flex;
    .comments-header-logo {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      overflow: hidden;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .comments-header-info {
      display: flex;
      flex-direction: column;
      padding-left: 15px;
      font-size: 12px;
      color: #999;
      line-height: 1;
      .title {
        margin-bottom: 10px;
        font-size: 14px;
        color: #333;
      }
    }
  }
  .comments-content {
    margin-top: 10px;
    font-size: 14px;
    color: #000;
  }
}
</style>