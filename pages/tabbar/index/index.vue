<template>
	<view class="home">
    <!-- 自定义导航栏 -->
    <navbar></navbar>
    <tab :list="tabList" @tab="tab" :tabIndex="tabIndex"></tab>
    <view class="home-list">
      <!-- 轮播图组件：包含滚动内容组件和卡片组件 -->
      <list :tab="tabList" :activeIndex="activeIndex" @change="change"></list>
    </view>
    
 
  
	</view>
</template>

<script>
  // uni-app 中 easyCom 引入组件 不需要写导入部分 局部引入
  // import navbar from '@/components/navbar/navbar.vue'
	export default {
    // components: {
    //   navbar
    // },
		data() {
			return {
				title: 'Hello',
        tabList: [],
        tabIndex: 0,
        activeIndex: 0
			}
		},
		onLoad() {
      // 页面一进入就调取这个方法
      this.getLabel();
		},
		methods: {
      tab({data,  index}) {
        this.activeIndex = index
      },
      getLabel() {
        this.$api.get_label({
          name: 'get_label'
        }).then((res) => {
            const { data } = res
            data.unshift({
              name: '全部'
            })
            this.tabList = data
        })
      },
      change(current) {
        this.tabIndex = current
      }
		}
	}
</script>

<style lang="scss">
page {
  height: 100%;
  display: flex;
  
}
.home {
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid  red;
  overflow: hidden;
  .home-list {
    flex: 1;
    box-sizing: border-box;
  }

}
</style>
