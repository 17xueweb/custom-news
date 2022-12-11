<template>
	<view class="home">
    <!-- 自定义导航栏 -->
    <navbar></navbar>
    <tab :list="tabList" @tab="tab"></tab>
    
    <!-- 滚动内容组件 -->
    <list-scroll>
      <!-- 卡片组件 -->
      <list-card v-for="item in 5"></list-card>
    </list-scroll>
  
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
        tabList: []
			}
		},
		onLoad() {
      // 页面一进入就调取这个方法
      this.getLabel();
		},
		methods: {
      tab(data, index) {
        
      },
      getLabel() {
        this.$api.get_label({
          name: 'get_label'
        }).then((res) => {
            const { data } = res
            this.tabList = data
        })
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

}
</style>
