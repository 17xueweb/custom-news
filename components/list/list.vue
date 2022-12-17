<template>
  <swiper class="home-swiper" :current="activeIndex" @change="change">
    <swiper-item v-for="(item, index) in tab" :key="index" class="swiper-item">
      <list-item :list="listCatchData[index]"></list-item>
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
        listCatchData: {}
      };
    },
    watch: {
      tab(newVal) {
        if(newVal.length === 0) return
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
        this.getList(current)
        this.$emit('change', current)
        
      },
      getList(current) {
        this.$api.get_list({
          name: this.tab[current].name
          }).then(res => {
          const { data } = res
          console.log('请求数据：', data);
          // this.list = data
          // this.listCatchData[current] = data
          // $set 帮我们通知页面 我们数组或者对象发生了变化 去刷新下
          // 数据懒加载
          this.$set(this.listCatchData, current, data)
        })
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
