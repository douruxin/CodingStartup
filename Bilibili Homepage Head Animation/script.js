let mouseX = 0
let mouseNewX = 0
let mouseOffset = 0
let banner = document.querySelector('.banner')
let images = document.querySelectorAll('.image')

// 获取屏幕宽度
let windowWidth = document.documentElement.clientWidth
let step = windowWidth / 2 / 5

// 效果样式（位移、模糊度）
let imagesData = [
  { x: 0, b: 4 },
  { x: 0, b: 0 },
  { x: 0, b: 1 },
  { x: 0, b: 4 },
  { x: 0, b: 5 },
  { x: 0, b: 6 }
]

let init = () => {
  // images[0].children[0].style = 'transform: translate(0px); filter: blur(4px)'
  // images[1].children[0].style = 'transform: translate(0px); filter: blur(0px)'
  // images[2].children[0].style = 'transform: translate(0px); filter: blur(1px)'
  // images[3].children[0].style = 'transform: translate(0px); filter: blur(4px)'
  // images[4].children[0].style = 'transform: translate(0px); filter: blur(5px)'
  // images[5].children[0].style = 'transform: translate(0px); filter: blur(6px)'

  for (const key in images) {
    if (images.hasOwnProperty(key)) {
      const element = images[key];
      const elementData = imagesData[key]
      
      images[key].children[0].style = `transition: .2s linear; transform: translate(${ elementData.x }px); filter: blur(${ elementData.b }px)`
    }
  }
}

banner.addEventListener('mouseover', (e) => {
  // 记录鼠标移动点的 X 坐标
  mouseX = e.clientX
  console.log(mouseX)
})

banner.addEventListener('mousemove', (e) => {
  mouseNewX = e.clientX
  mouseOffset = mouseX - mouseNewX
  console.log(mouseOffset)

  for (const key in images) {
    if (images.hasOwnProperty(key)) {
      let level = (6 - parseInt(key)) * 10

      const element = images[key];
      const elementData = imagesData[key]

      // 计算新的虚化值
      // 实际的鼠标向右移动
      // 所有的图层达到最清晰后再转向模糊
      // 所以我们这里取一下绝对值
      // 模糊度不要出现负数
      // 等于 0 后开始逐渐变大
      let blurNew = Math.abs(elementData.b + (mouseOffset / step))

      // 新的坐标
      let levelNew = 0 - (mouseOffset / level)

      element.children[0].style = `transform: translate(${ levelNew }px); filter: blur(${ blurNew }px)`
    }
  }
})

banner.addEventListener('mouseout', (e) => {
  init()
})

let blinkIndex = 0
let timeOut = 4000

let blink = () => {

  if (blinkIndex === 4) {
    blinkIndex = 1
    timeOut = 4000
  } else {
    blinkIndex += 1
    timeOut = 30
  }

  images[1].children[0].src = `./images/girl${ blinkIndex }.png`

  setTimeout(() => {
    blink()
  }, timeOut)
}

window.onload = () => {
  init()
  blink()
}
