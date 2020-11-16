const images = document.querySelectorAll('header > div > img')

document.querySelector('header').addEventListener('mousemove', (e) => {
  // 当鼠标移到最左时是 0，移动最右时是 1
  let percentage = e.clientX / window.outerWidth
  // 定义分层图片位置的距离
  let offset = 10 * percentage
  // 定义图片的模糊度
  let blur = 20

  for (let [index, image] of images.entries()) {
    // 越往后的图片，位移就会越多
    offset *= 1.3

    // 曲线公式：y = x^2 * 20
    // 将 index / images.length 减去 percentage 作为公式里的 x
    let blurValue = (Math.pow((index / images.length - percentage), 2) * blur)

    // 最后通过 setProperty()，分别将位移和模糊度的值
    image.style.setProperty('--offset', `${offset}px`)
    image.style.setProperty('--blur', `${blurValue}px`)
  }
})
