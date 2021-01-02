let startingPoint
const header = document.querySelector('header')

// 移入起始点：鼠标进入这个 header 的时候，确定起始点
header.addEventListener('mouseenter', (e) => {
  startingPoint = e.clientX
})

// 百分比：鼠标的 X 的位置 e.clientX 减去鼠标移入的起始点，除以浏览器视窗的宽度 window.outerWidth，最后加上 0.5 默认在最中间的位置（最左 0 ~ 最右 1）
header.addEventListener('mousemove', (e) => {
  let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5

  header.style.setProperty('--percentage', percentage)
  header.classList.add('moving')
})

// 移回起始点：鼠标离开这个 header 的时候，返回到原来的位置
header.addEventListener('mouseleave', (e) => {
  header.classList.remove('moving')
  header.style.setProperty('--percentage', 0.5)
})
