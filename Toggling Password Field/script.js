new Vue({
  el: '#app',
  data: {
    // 控制是否隐藏密码：默认隐藏
    isHide: false,
    // type 预设是 text
    type: 'text'
  },
  watch: {
    isHide (hide) {
      setTimeout(() => {
        this.type = (hide) ? 'password' : 'text'
      }, 200)
    }
  }
})
