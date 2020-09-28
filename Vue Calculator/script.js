new Vue({
  el: '#app',
  data: {
    // 显示的数字
    equation: '0',
    // 判断是否已输入小数位
    isDecimalAdded: false,
    // 判断是否已点击加、减、乘或除
    isOperatorAdded: false,
    // 判断计算器是否已开始输入数字
    isStarted: false
  },
  methods: {
    // 判断 character 是否加、减、乘或除
    isOperator (character) {
      return ['+', '-', '×', '÷'].indexOf(character) > -1
    },
    // 点击加、减、乘、除、数字或小数位时
    append (character) {
      // 一开始时输入的一定要是数字，不可以是运算符号
      if (this.equation === '0' && !this.isOperator(character)) {
        // 然后再判断输入的是否为小数位符号
        if (character === '.') {
          this.equation += '' + character
          this.isDecimalAdded = true
        } else {
          // 加引号是为了将它转换成 String
          this.equation = '' + character
        }

        this.isStarted = true
        return
      }

      // If Number
      if (!this.isOperator(character)) {
        if (character === '.' && this.isDecimalAdded) {
          return
        }

        if (character === '.') {
          this.isDecimalAdded = true
          // 避免在输入小数位符号后，直接输入运算符号
          this.isOperatorAdded = true
        } else {
          this.isOperatorAdded = false
        }

        this.equation += '' + character
      }

      // 判断当输入的是运算符号的时候
      if (this.isOperator(character) && !this.isOperatorAdded) {
        this.equation += '' + character
        this.isDecimalAdded = false
        this.isOperatorAdded = true
      }
    },
    // 点击等于符号时
    calculate () {
      let result = this.equation
        .replace(new RegExp('×', 'g'), '*')
        .replace(new RegExp('÷', 'g'), '/')

      this.equation = parseFloat(eval(result).toFixed(9)).toString()
      this.isDecimalAdded = false
      this.isOperatorAdded = false
    },
    // 点击正负号时
    calculateToggle () {
      if (this.isOperatorAdded || !this.isStarted) {
        return
      }

      this.equation = this.equation + '* - 1'
      this.calculate()
    },
    // 点击百分比符号时
    calculatePercentage () {
      if (this.isOperatorAdded || !this.isStarted) {
        return
      }

      this.equation = this.equation + '* 0.01'
      this.calculate()
    },
    // 点击 AC 符号时
    clear () {
      this.equation = '0'
      this.isDecimalAdded = false
      this.isOperatorAdded = false
      this.isStarted = false
    }
  }
})
