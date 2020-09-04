new Vue({
  el: '#counter',
  data: {
    count: 12
  },
  methods: {
    add () {
      this.count++
    },
    subtract () {
      this.count--
    }
  }
})
