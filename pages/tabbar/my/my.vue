<template>
  <view>
    <view class="my-header">
      <view class="my-header-background">
        <image src="../../../static/logo.png" ></image>
      </view>
      <view class="my-header-logo">
        <view class="my-header-logo-box">
          <image src="../../../static/logo.png" mode="aspectFill"></image>
        </view>
        <text class="my-header-name">meHaotian</text>
      </view>
      <view class="my-header-info">
        <view class="my-header-info-box">
          <text class="my-header-info-title">被关注</text>
          <text>1234</text>
        </view>
        <view class="my-header-info-box">
          <text class="my-header-info-title">粉丝</text>
          <text>1234</text>
        </view>
        <view class="my-header-info-box">
          <text class="my-header-info-title">积分</text>
          <text>1234</text>
        </view>
      </view>
    </view>
    
    <view class="my-content">
      <view class="my-content-list">
        <view class="my-content-list-title">
          <uni-icons class="icons" type="contact" size="16" color="#666"></uni-icons>
          <text>我的文章</text>
        </view>
        <uni-icons type="arrowright" size="14" color="#666"></uni-icons>
      </view>
      <view class="my-content-list">
        <view class="my-content-list-title">
          <uni-icons class="icons" type="help" size="16" color="#666"></uni-icons>
          <text>意见反馈</text>
        </view>
        <uni-icons type="arrowright" size="14" color="#666"></uni-icons>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
.my-header {
  padding-bottom: 15px;
  position: relative;
  .my-header-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // 模糊
    filter: blur(8px);
    opacity: 0.3;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .my-header-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    .my-header-logo-box {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .my-header-name {
      margin-top: 15px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .my-header-info {
    margin-top: 15px;
    display: flex;
    .my-header-info-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 12px;
      color: #999;
      .my-header-info-title {
        font-size: 14px;
        color: #333;
      }
    }
  }
}
.my-content {
  .my-content-list {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    .my-content-list-title {
      display: flex;
      align-items: center;
      .icons {
        margin-right: 5px;
      }
    }
  }
}
</style>
