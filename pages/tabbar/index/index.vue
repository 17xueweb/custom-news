<template>
	<view class="content">
    <!-- 自定义导航栏 -->
    <navbar></navbar>
    <tab :list="tabList"></tab>
<!--    <view v-for="item in 100">
      {{item}} 内容那个
    </view> -->
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
      getLabel() {
        // 获取云函数的方法
        // name 是云函数的名称
        uniCloud.callFunction({
          name: 'get_label'
        }).then((res) => {
          const { result } = res
          this.tabList = result.data
        })
      }
		}
	}
</script>

<style lang="scss">

</style>
