<template>
  <view class="comments-box">
    <view class="comments-header">
      <view class="comments-header-logo">
        <image :src="comments.author.avatar" mode="aspectFill"></image>
      </view>
      <view class="comments-header-info">
        <view class="title">
          {{comments.author.author_name}}
        </view>
        <view class="">
          {{comments.author.create_time}}
        </view>
      </view>
    </view>
    <view class="comments-content">
      <view class="">
        {{comments.comment_content}}
      </view>
      <view class="comments-info">
        <view class="comments-button" @click="commentsReply(comments)">
          回复
        </view>
      </view>
      <view class="comments-reply" v-for="item in comments.replys" :key="item.comment_id">
        <comments-box :comments="item"></comments-box>
      </view>
  </view>
  </view>
</template>

<script>
  // 递归组件 自己引用自己
  import commentsBox from '@/components/comments-box/comments-box.vue'
  export default {
    components: {
      commentsBox
    },
    name:"comments-box",
    props: {
      comments: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        
      };
    },
    methods: {
      commentsReply(comment) {
        this.$emit('reply', comment)
      }
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
    .comments-info {
      margin-top: 15px;
      display: flex;
      .comments-button {
        padding: 2px 10px;
        font-size: 12px;
        color: #999;
        border-radius: 20px;
        border: 1px solid #ccc;
      }
    }
    .comments-reply {
      display: flex;
      margin: 15px 0;
      padding: 0 10px;
      border: 1px solid #eee;
    }
  }
}
</style>