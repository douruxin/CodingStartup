# CodingStartup

## 上下左右置中对其的三种方法

### 左右置中的两种方法

- **display: inline / inline-block**
  + 将父元素（容器）设定 `text-align: center;`
  + 就可左右置中
- **display: block**
  + 将元素本身的 `margin-left` 与 `margin-right` 设定为 `auto`，就可以左右置中。

### 三个上下左右置中的方法

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Centering Elements</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="black"></div>
</body>
```

```css
/* -- Graphics For Demo -- */
html {
  background: url(https://codingstartup.com/assets/centering-elements/dart.png) no-repeat center center;
  background-size: 460px 460px;
  min-height: 100vh;
  margin: 0;
}

#black {
  background: url(https://codingstartup.com/assets/centering-elements/black.png) no-repeat center;
  background-size: cover;
  width: 160px;
  height: 160px;
}
/* -- Graphics For Demo -- */
```

#### Position Absolute

- 对齐元素本身

```css
#black {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

#### Flexbox

- 对齐元素内容

```css
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### Display Table

- 对齐元素内容

```html
<div class="cell">
  <div id="black"></div>
</div>
```

```css
/* -- Graphics For Demo -- */
html {
  background: url(https://codingstartup.com/assets/centering-elements/dart.png) no-repeat center center;
  background-size: 460px 460px;
  min-height: 100vh;
  margin: 0;
}

#black {
  background: url(https://codingstartup.com/assets/centering-elements/black.png) no-repeat center;
  background-size: cover;
  width: 160px;
  height: 160px;
  display: inline-block;
}
/* -- Graphics For Demo -- */

body {
  display: table;
  width: 100%;
  min-height: 100vh;
  margin: 0;
}

.cell {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```
