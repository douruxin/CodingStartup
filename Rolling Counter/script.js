new Vue({
  el: "#app",
  data: {
    count: 10,
    countBefore: 9,
    countAfter: 11,
    isBefore: false,
    isAfter: false,
  },
  computed: {
    isAnimating() {
      return this.isBefore || this.isAfter;
    },
  },
  mounted() {
    // 感謝 BiliBili 會員 哈尼亚索 提出的方案，使用 transitionend 比 setTimeout 更精準
    this.$refs.number.addEventListener("transitionend", () => {
      if (this.isBefore) {
        this.count--;
        this.countBefore = this.count - 1;
        this.countAfter = this.count + 1;
        this.isBefore = false;
      }

      if (this.isAfter) {
        this.count++;
        this.countBefore = this.count - 1;
        this.countAfter = this.count + 1;
        this.isAfter = false;
      }
    });
  },
  methods: {
    subtract() {
      // 1. 設定 isBefore 為 true，<span> 就會套用 before class
      this.isBefore = true;

      // 2. transitionend 事件會在 CSS transition 執行完畢後觸發 (參考 mounted)
    },
    add() {
      // 1. 設定 isAfter 為 true，<span> 就會套用 after class
      this.isAfter = true;

      // 2. transitionend 事件會在 CSS transition 執行完畢後觸發 (參考 mounted)
    },
  },
});
