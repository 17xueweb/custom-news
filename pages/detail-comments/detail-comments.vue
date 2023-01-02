<template>
  <view>
    <view class="comments-content" v-for="item in commentsList" :key="item.comment_id">
      <comments-box :comments="item"></comments-box>
    </view>
    <uni-load-more v-if="commentsList.length === 0 || commentsList.length > 5" iconType="snow" :status="loading"></uni-load-more>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        commentsList: [],
        article_id: '',
        page: 1,
        pageSize: 5,
        loading: 'loading'
      }
    },
    onLoad(query) {
      this.article_id = query.id
      this.getComments()
    },
    // 页面上拉触底事件
    onReachBottom() {
      if(this.loading === 'noMore') return
      this.page++
      this.getComments()
    },
    methods: {
      getComments() {
        this.$api.get_comments({
          article_id: this.article_id,
          page: this.page,
          pageSize: this.pageSize
        }).then(res => {
          console.log(res);
          const { data } = res
          if(data.length === 0) {
            this.loading = 'noMore'
            return
          }
          // 对象赋值 放置原有数据被替换
          let oldFormData = JSON.parse(JSON.stringify(this.commentsList))
          oldFormData.push(...data)
          this.commentsList = oldFormData
        })
      }
    }
  }
</script>

<style lang="scss">
.comments-content {
  padding: 0 15px;
}
</style>
