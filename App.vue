<script>
	export default {
    // 全局只会触发一次,在应用启动时触发
		onLaunch: function() {
      this.$api.get_user({
        user_id: '63909d2df5cf3a959a5f229b'
      }).then((res) => {
        const { data } = res
        this.$store.dispatch('set_userinfo', data)
      })
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
  @import 'components/gaoyia-parse/parse.css';
</style>
