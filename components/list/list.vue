<template>
  <swiper class="home-swiper" :current="activeIndex" @change="change">
    <swiper-item v-for="(item, index) in tab" :key="index" class="swiper-item">
      <list-item :list="listCatchData[index]" @loadmore="loadmore" :load="load[index]"></list-item>
    </swiper-item>
  </swiper>
</template>

<script>
  import listItem from './list-item.vue'
  export default {
    props: {
      tab: {
        type: Array,
        default() {
          return []
        }
      },
      activeIndex: {
        type: Number,
        default: 0
      }
    },
    components: {
      listItem
    },
    name: "list",
    data() {
      return {
        list: [],
        // 对数据进行缓存
        listCatchData: {},
        load: {},
        pageSize: 10
      };
    },
    watch: {
      tab(newVal) {
        if(newVal.length === 0) return
        this.listCatchData = {}
        this.load = {}
        this.getList(this.activeIndex)
      }
    },
    // onLoad 在页面， created 在组件中
    created() {
      // TODO: tab还没有赋值，所以传0 报错， 监听tab变化
      // this.getList(0)
    },
    methods: {
      change(e) {
        const { current } = e.detail
        this.$emit('change', current)
        // 没有数据时候 才去调用请求 解决 swiper往回滑动重复调用接口问题
        if(!this.listCatchData[current] || this.listCatchData[current].length === 0) {
          this.getList(current)
        }
      },
      getList(current) {
        if(!this.load[current]) {
          this.load[current] = {
            page: 1,
            loading: 'loading'
          }
        }
        
        this.$api.get_list({
          name: this.tab[current].name,
          page: this.load[current].page,
          pageSize: this.pageSize
          }).then(res => {
          const { data } = res
          console.log(res);
          if(data.length === 0) {
            let oldLoad = {}
            oldLoad.loading = 'noMore'
            oldLoad.page = this.load[current].page
            this.$set(this.load, current, oldLoad)
            // 强制渲染页面
            this.$forceUpdate()
            return
          }
          // this.list = data
          // this.listCatchData[current] = data
          // $set 帮我们通知页面 我们数组或者对象发生了变化 去刷新下
          let oldList = this.listCatchData[current] || []
          oldList.push(...data)
          // 数据懒加载
          this.$set(this.listCatchData, current, oldList)
        })
      },
      loadmore() {
        if(this.load[this.activeIndex].loading === 'noMore') return
        this.load[this.activeIndex].page++
        this.getList(this.activeIndex)
      }
    }
  }
</script>

<style lang="scss">
  .home-swiper {
    height: 100%;

    .swiper-item {
      height: 100%;
      overflow: hidden;

      .list-scroll {
        height: 100%;
      }
    }
  }
</style>
