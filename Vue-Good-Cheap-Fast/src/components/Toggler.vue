<template>
  <div class="toggler" :style="{ ...buttonSizeStyles }">
    <label>
      <input type="checkbox" :checked="checked" @input="updateHandler" />
      <span></span>
    </label>
    <strong>
      <slot />
    </strong>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 1,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      buttonWidth: 50,
      buttonHeight: 30,
      toggleDiameter: 26,
      toggleWider: 34,
    };
  },
  computed: {
    buttonSizeStyles() {
      return {
        "--button-width": this.buttonWidth * this.size + "px",
        "--button-height": this.buttonHeight * this.size + "px",
        "--toggle-diameter": this.toggleDiameter * this.size + "px",
        "--toggle-wider": this.toggleWider * this.size + "px",
      };
    },
  },
  methods: {
    // 监听 checkbox 的值有变动时触发
    updateHandler(event) {
      this.$emit("updated", event.target.checked);
    },
  },
};
</script>

<style scoped>
.toggler {
  /* 按钮宽度 */
  --button-width: 500px;
  /* 按钮高度 */
  --button-height: 295px;
  /* 里面圆形直径 */
  --toggle-diameter: 255px;
  /* 里面圆形在长按状态下的宽度 */
  --toggle-wider: 333px;

  /* 按钮与里面圆形之间的距离 */
  --button-toggle-offset: calc(
    (var(--button-height) - var(--toggle-diameter)) / 2
  );
  /* 里面圆形阴影的大小 */
  --toggle-shadow-offset: 10px;
  /* 浅灰色 */
  --color-grey: #e9e9e9;
  /* 深灰色 */
  --color-dark-grey: #39393d;
  /* 绿色 */
  --color-green: #30d158;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

span {
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc(var(--button-height) / 2);
  position: relative;
  transition: 0.3s all ease-in-out;
}

span::after {
  content: "";
  display: inline-block;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  background-color: #fff;
  border-radius: calc(var(--toggle-diameter) / 2);
  position: absolute;
  top: var(--button-toggle-offset);
  left: 0;
  transform: translateX(var(--button-toggle-offset));
  box-shadow: var(--toggle-shadow-offset) 0
    calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
  transition: 0.3s all ease-in-out;
}

input[type="checkbox"]:checked + span {
  background-color: var(--color-green);
}

input[type="checkbox"]:checked + span::after {
  transform: translateX(
    calc(
      var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)
    )
  );
  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0
    calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:active + span::after {
  width: var(--toggle-wider);
}

input[type="checkbox"]:checked:active + span::after {
  transform: translateX(
    calc(
      var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)
    )
  );
}

.toggler {
  display: inline-flex;
  flex-direction: row;
}

.toggler strong {
  line-height: var(--button-height);
  font-size: var(--toggle-diameter);
  margin-left: calc(var(--toggle-diameter) / 4);
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #1c1c1e;
  }

  span {
    background-color: var(--color-dark-grey);
  }
}
</style>
