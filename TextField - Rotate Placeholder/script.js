new Vue({
  el: '#app',
  data () {
    return {
      // 关键词的数据列表
      keywords: [
        'iPad Pro',
        'Macbook Pro',
        'iMac',
        'iPhone'
      ],
      // 用来控制当聚焦到文字方块时，显示 Placeholder 以及隐藏 ::before 和 ::after
      // 只是用来判断当聚焦的时候不进行动画
      isFocusing: false,
      // 目前轮播到的位置
      currentIndex: 0,
      // 控制通过加入与移除 animate class 去触发动画
      animationTriggerFlag: true
    }
  },
  computed: {
    before () {
      let keyword = this.keywords[this.currentIndex]
      return (this.isFocusing) ? '' : keyword
    },
    after () {
      let keyword = typeof this.keywords[this.currentIndex + 1] === 'undefined' ? this.keywords[0] : this.keywords[this.currentIndex + 1]
      return (this.isFocusing) ? '' : keyword
    },
    placeholder () {
      let keyword = this.keywords[this.currentIndex]
      return (!this.isFocusing) ? '' : keyword
    },
    shouldAnimate () {
      // animationTriggerFlag 成为其中一个控制动画触发的条件
      return !this.isFocusing && this.animationTriggerFlag
    }
  },
  methods: {
    // 轮播关键词动画执行完成后触发的事件
    animationEnded (e) {
      // 由于在 label 上监听 ::before 和 ::after 的 animationend 事件
      // 所以其实每一次动画完成都会触发了两次，加入 e.pseudoElement 去判断其中一个即可
      // console.log(e.psendoElement) // (2) undefined
      if (e.pseudoElement === '::after') {
        // 这样 animate 这个 class 就不会套用到 label 上
        this.animationTriggerFlag = false

        let newIndex = typeof this.keywords[this.currentIndex + 1] === 'undefined' ? 0 : this.currentIndex + 1
        this.currentIndex = newIndex

        setTimeout(() => {
          this.animationTriggerFlag = true
        }, 3000)
      }
    },
    // 监听键盘 Enter 事件
    doSearch (e) {
      if (e.keyCode === 13) {
        const input = document.querySelector('input[type="text"]').value
        if (input !== '') {
          window.alert(input)
        } else {
          window.alert(this.keywords[this.currentIndex])
        }
      }
    }
  }
})
