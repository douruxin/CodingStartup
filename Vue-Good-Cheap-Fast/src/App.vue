<template>
  <div id="app">
    <Toggler
      :size="4"
      :checked="checked[0]"
      @updated="(value) => updatedHandler(0, value)"
      >Good</Toggler
    >
    <Toggler
      :size="4"
      :checked="checked[1]"
      @updated="(value) => updatedHandler(1, value)"
      >Cheap</Toggler
    >
    <Toggler
      :size="4"
      :checked="checked[2]"
      @updated="(value) => updatedHandler(2, value)"
      >Fast</Toggler
    >
  </div>
</template>

<script>
import Toggler from "./components/Toggler";

export default {
  name: "App",
  components: {
    Toggler,
  },
  data() {
    return {
      // 三个开关按钮的设定值，默认都是 false
      checked: [false, false, false],
      indexes: [],
    };
  },
  methods: {
    updatedHandler(index, value) {
      /* 
        队列思想：
          先进先出（First-In-First-Out）
      */

      // 先判断如果 value 是 true，而且 index 未在 indexes 数组内时
      // 即是开启了开关按钮，而这个按钮的编号未在 indexes 里面时，将 index 加入到 indexes 数组内
      if (value && !this.indexes.includes(index)) {
        // 将 index 新增到 indexes 数组内
        let newIndexes = [...this.indexes];
        newIndexes.push(index);
        // 再赋值到 this.indexes 即可
        this.indexes = newIndexes;
      }

      // 关闭了开关按钮，而这个按钮的编号已经在 indexes 里面时
      if (!value && this.indexes.includes(index)) {
        // 将 index 从 indexes 数组内移除
        let newIndexes = [...this.indexes];
        newIndexes.splice(this.indexes.indexOf(index), 1);
        // 再赋值到 this.indexes 即可
        this.indexes = newIndexes;
      }

      // 而这个数组只会容纳最多两个值，当出现第三个之的时候，就会将第一个值移除
      if (this.indexes.length === 3) {
        // 将 index 从 indexes 数组内移除
        let newIndexes = [...this.indexes];
        newIndexes.splice(0, 1);
        // 再赋值到 this.indexes 即可
        this.indexes = newIndexes;
      }

      // 然后定义一个新的 checked 数组，初始化三个 false 的值
      let checked = [false, false, false];

      // 判断如果 this.indexes[0] 是有值的话，即是按钮编号的话
      // 将 checked 对应位置的值设定为 true
      if (typeof this.indexes[0] !== "undefined") {
        checked[this.indexes[0]] = true;
      }

      if (typeof this.indexes[1] !== "undefined") {
        checked[this.indexes[1]] = true;
      }

      this.checked = checked;
    },
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
