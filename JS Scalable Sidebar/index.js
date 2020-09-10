const SCALABLE = document.querySelector('.scalable')
const SEPARATOR = document.querySelector('.separator')

let startX, startWidth

startWidth = window.localStorage.getItem('scalable_width') || getScalableDivWidth()

SCALABLE.style.width = startWidth + 'px'

SEPARATOR.addEventListener('mousedown', startDrag)

function startDrag(e) {
  startX = e.clientX
  startWidth = getScalableDivWidth()

  // 让鼠标无论移动到网页中的任何位置，都能够监听得到
  document.documentElement.addEventListener('mousemove', onDrag)
  document.documentElement.addEventListener('mouseup', stopDrag)
}

function onDrag(e) {
  // 距左宽度 + （当前 X 坐标 - 初始 x 坐标）
  let newWidth = startWidth + e.clientX - startX
  SCALABLE.style.width = newWidth + 'px'
}

function stopDrag(e) {
  // 将松开鼠标后的侧边栏宽度放到本地存储中
  window.localStorage.setItem('scalable_width', getScalableDivWidth())
  // 松开鼠标，移除监听事件
  document.documentElement.removeEventListener('mousemove', onDrag)
  document.documentElement.removeEventListener('mouseup', stopDrag)
}

function getScalableDivWidth() {
  return parseInt(window.getComputedStyle(SCALABLE).width, 10)
}
