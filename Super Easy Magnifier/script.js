document.querySelector('#image').addEventListener('mouseenter', enterHandler)
document.querySelector('#image').addEventListener('mousemove', moveHandler)
document.querySelector('#image').addEventListener('mouseleave', leaveHandler)

// 兼容：以上 mouse 事件在手机上不适用，需要监听 touch 事件
document.querySelector('#image').addEventListener('touchstart', enterHandler)
document.querySelector('#image').addEventListener('touchmove', moveHandler)
document.querySelector('#image').addEventListener('touchend', leaveHandler)

/**
 * 优化
 * @bug 当我手指开始点下去的时候，如果不移动的话，放大的就是上一次 x 和 y 的位置，而不是我直接点下去的位置。mouse 事件是没有这个问题的，因为鼠标要移到图片的哪一个点都好，都一定要有移动的动作，一定会触发到 mousemove 的。而更正这个情况就很简单，只需要在 enterHandler 和 leaveHandler 函数中，都执行一次 moveHandler 就可以了，注意要讲 e 这个参数传递进去
 */


/**
 * 事件处理函数：鼠标进入图片时触发
 * @description 鼠标进入图片时放大，离开时缩小到原来大小
 * @param {object} e 鼠标事件对象
 */
function enterHandler(e) {
  e.target.setAttribute('zoomed', 1)
  moveHandler(e)
}

/**
 * 事件处理函数：鼠标在图片上移动时触发
 * @description 计算出鼠标移到图片上的 x 方向百分比和 y 方向百分比（位移的数字可以通过 offsetX 和 offsetY 获取，再除以容器的宽度和高度就可以了）
 * @param {object} e 鼠标事件对象
 */
function moveHandler(e) {
  // 为了准确获取容器的大小，再定义一个变量 rect
  //! tips: getBoundingClientRect() 方法用来获取某个元素相对于视窗的位置集合
  let rect = e.target.getBoundingClientRect()
  // 因为 touch 事件的 event 物件上并没有 offsetX 和 offsetY，所以我们需要自行计算
  let offsetX, offsetY

  // 判断 e.type 是否为 touchstart、touchmove 或 touchend
  //! tips: includes() 方法用来判断一个数组是否包含一个指定的值
  if (['touchstart', 'touchmove', 'touchend'].includes(e.type)) {
    // touch 是支持多点触碰的
    // 假设我们用一只手指触碰屏幕，要获取第一个触碰点，可以通过 e.touches[0]，然后 .pageX 减去 rect.left，.pageY 减去 rect.top
    offsetX = e.touches[0] && e.touches[0].pageX - rect.left
    offsetY = e.touches[0] && e.touches[0].pageY - rect.top

    // 在手机操作的情况下，还要加入 e.preventDefault
    // 这样才可以避免手指在图片上滑动的时候触发页面的卷动
    e.preventDefault()
  } else {
    offsetX = e.offsetX
    offsetY = e.offsetY
  }

  let x = offsetX / rect.width
  let y = offsetY / rect.height
  
  e.target.style.setProperty('--x', x)
  e.target.style.setProperty('--y', y)
}

/**
 * 事件处理函数：鼠标离开图片时触发
 * @param {object} e 鼠标事件对象
 */
function leaveHandler(e) {
  e.target.removeAttribute('zoomed')
  moveHandler(e)
}
