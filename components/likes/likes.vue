<template>
  <view class="icons" @click.stop="likeTap">
    <uni-icons size="20" color="#f07373" :type="like ? 'heart-filled' : 'heart'"></uni-icons>
  </view>
</template>

<script>
  export default {
    name: "likes",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        like: false
      };
    },
    methods: {
      likeTap() {
        this.like = !this.like
        this.setUpdateLikes()
      },
      setUpdateLikes() {
        this.$api.update_like({
          user_id: '63909d2df5cf3a959a5f229b',
          article_id: this.item._id
        }).then(res => {
          
        })
      }
    }
  }
</script>

<style lang="scss">
      .icons {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
      }
</style>
