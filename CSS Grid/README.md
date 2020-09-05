# Grid 网页布局完全解构

- CSS 的排版方式大致上包括：`Table`、`Float`、`Flexbox` 和 `Grid` 四种。
- `Table` 属于最古老的方式，目前已甚少使用。
- `Float` 的排版方式曾经盛极一时，甚至用“DIV + CSS”去形容当时这种新颖的排版方式。
- 而 `Flexbox` 与 `Grid` 则是真正为了网页布局而设计的排版方式。

## 对比 Flexbox 与 Grid

- 要对比 `Flexbox` 与 `Grid`
- 最大的不同是 `Flexbox` 属于一维（1-Dimension）的排版方式
- 而 `Grid` 则是二维（2-Dimensions）的排版方式
  + 意思是一个 `Flexbox` 容器只能控制一个方向，即水平方向或垂直方向
  + 如果要控制另一方向则需要再添加一层 `Flexbox` 容器
  + `Grid` 容器则可以一次过控制两个方向，这样就可以直接定义容器内元素的位置

## 建构 Grid 容器

```html
<body>
  <div id="ruler"></div>
  <div id="grid-container"></div>
</body>
```

```css
body {
  margin: 40px;
}

#ruler {
  position: absolute;
  top: 0;
  left: 0;
  width: 580px;
  height: 580px;
  background-image: url(https://codingstartup.com/assets/grid/grid-ruler.png);
  background-size: 580px 580px;
}

#grid-container {
  display: grid;
  width: 500px;
  height: 500px;
  background-color: #eee;
  grid-template-rows: 100px 100px 100px 100px 100px;
  grid-template-columns: 100px 100px 100px 100px 100px;
}
```

## Grid 容器内放置元素

- 这些线在 CSS Grid 中称作 `Grid Line`

```html
 <div id="grid-container">
  <div class="cell-1"></div>
  <div class="cell-2"></div>
</div>
```

```css
.cell-1 {
  background-color: blue;
  grid-row: 1 / 4;
  /* span: 延伸 3 */
  grid-column: 2 / span 3;
}

.cell-2 {
  background-color: yellow;
  grid-row: 4 / 6;
  grid-column: 2 / 6;
}
```

## Grid Area

```html
<body>
  <!-- <div id="ruler"></div> -->
  <div id="grid-container">
    <div class="cell-1"></div>
    <div class="cell-2"></div>
    <div class="cell-3"></div>
    <div class="cell-4"></div>
  </div>
</body>
```

```css
#grid-container {
  display: grid;
  width: 540px;
  height: 540px;
  background-color: #eee;
  grid-template-rows: [Y1] 100px [Y2] 100px [Y3] 100px [Y4] 100px [Y5] 100px [Y6];
  grid-template-columns: [X1] 100px [X2] 100px [X3] 100px [X4] 100px [X5] 100px [X6];
  grid-template-areas:
    "header header header header header"
    "nav main main main main"
    "nav main main main main"
    "nav main main main main"
    ". footer footer footer .";
  row-gap: 10px;
  column-gap: 10px;
}

.cell-1 {
  background-color: blue;
  grid-area: header;
}

.cell-2 {
  background-color: yellow;
  grid-area: nav;
}

.cell-3 {
  background-color: orange;
  grid-area: main;
}

.cell-4 {
  background-color: black;
  grid-area: footer;
}
```

## fr & repeat()

- `fr`：这个单位就是专门用于 Grid 的“比例”相对单位
  + `1fr` 即占一份的意思
  + 如果将 5 个 `100px` 都改为 `1fr`
  + 即每个占 5 份之 1 的空间
- `repeat()`：处理重复出现相对单位的情况
  + 参数：第一个参数是要重覆多少次，第二个参数是重覆些什么

```css
#grid-container {
  display: grid;
  width: 540px;
  height: 540px;
  background-color: #eee;
  grid-template-rows: 3fr repeat(4, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    "header header header header header"
    "nav main main main main"
    "nav main main main main"
    "nav main main main main"
    ". footer footer footer .";
  row-gap: 10px;
  column-gap: 10px;
}
```
