<template>
  <view class="home">
    <!-- 导航栏 -->
    <navbar :isSearch="true" @input="change"></navbar>
    <view class="home-list">
      <view class="label-box">
        <view class="label-header">
          <!-- 搜索历史 -->
          <text class="label-title">搜索历史</text>
          <text class="label-clear">清空</text>
        </view>
        <view v-if="historyLists.length > 0" class="label-content">
          <view class="label-content-item" v-for="item in historyLists">
            {{item.name}}内容
          </view>
        </view>
        <view v-else class="no-data">
          没有搜索历史
        </view>
      </view>
    </view>
    <button @click="testBtn">添加历史记录</button>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        // historyList: []
      }
    },
    computed: {
      ...mapState(['historyLists'])
    },
    methods: {
      change(value) {
        console.log('接收的value' + value);
      },
      testBtn() {
        this.$store.dispatch('set_history', {
          name: 'test'
        })
      }
    }
  }
</script>

<style lang="scss">
page {
  height: 100%;
  display: flex;
  background-color: #f5f5f5;
}
.home {
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid red;
  .label-box {
    background-color: #fff;
    margin-bottom: 10px;
    .label-header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #666;
      padding: 10px 15px;
      border-bottom: 1px solid #f5f5f5;
      .label-title {
        color: $mk-base-color;
      }
      .label-clear {
        color: #30b33a;
        font-weight: bold;
      }
    }
    .label-content {
      display: flex;
      flex-wrap: wrap;
      padding: 15px;
      padding-top: 0;
      .label-content-item {
        padding: 2px 10px;
        margin-top: 12px;
        margin-right: 10px;
        border-radius: 5px;
        border: 1px solid #666;
        font-size: 14px;
        color: #666;
      }
    }
    
  }
}
.no-data {
  height: 200px;
  line-height: 200px;
  width: 100%;
  text-align: center;
  color: #666;
  font-size: 12px;
}
</style>
