$(function () {
  $('iPhone-SE').height($(window).height())
})

$(window).on('scroll', function () {
  // 页面卷动的百分比 = 目前的卷动距离 / (页面的总高度 - 视窗的宽度)
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

  let frame = Math.ceil(scrolled * 84)
  changeFrame(frame)

  moveDevice($('#iPhone-SE'), scrolled, 0.3, 0.6, 0.6, 1)

  showHideText($('.left'), scrolled, 0.45, 0.52, 0.58, 0.65)
  showHideText($('.right'), scrolled, 0.9, 1)
})

const loader = new PxLoader()
const images = []

// 动态获取图片地址
for (let i = 0; i < 85; i++) {
  images[i] = loader.addImage(
    `https://s3-us-west-2.amazonaws.com/s.cdpn.io/2002878/iphone-se.${(
      '0' +
      (i + 1)
    ).slice(-2)}.png`
  )
}

loader.addCompletionListener(function () {
  let context = $('#iPhone-SE')[0].getContext('2d')

  $('body').addClass('loaded')

  context.drawImage(images[0], 0, 0, 432, 976)

  setTimeout(() => {
    $('html, body').animate({ scrollTop: 2500 }, 2500);
    
    setTimeout(() => {
      $('html, body').animate({ scrollTop: 5000 }, 2500);
    }, 3000)
  }, 3000)
})

loader.start()

// 在卷动的时候，转换为关键帧
function changeFrame(frame) {
  let index = frame - 1
  if (index < 0) index = 0
  if (index > 84) index = 84

  let context = $('#iPhone-SE')[0].getContext('2d')
  // 参数: 从 iamges 数组中获取对应的图片、x坐标、y坐标、图片尺寸(x)、图片尺寸(y)
  context.drawImage(images[index], 0, 0, 432, 976)
}

// el 元素，current 目前卷动的距离
// toLeftForm & toLeftTo 向左移动的起始和结束
// toRightFrom & toRightTo 向右移动的起始和结束
function moveDevice(el, current, toLeftFrom, toLeftTo, toRightFrom, toRightTo) {
  if (current <= toLeftTo) {
    // 当 current 在 toLeftFrom 至 toLeftTo 之间时，我们会将 canvas 向左移动
    if (current >= toLeftFrom) {
      let offsetRatio = (current - toLeftFrom) / (toLeftTo - toLeftFrom)
      $(el).css('left', $(el).width() / 2 * -1 * offsetRatio)
    }
  } else {
    // 当 current 大于 toRightFrom 的时候，会将 canvas 向右移动
    let offsetRatio = (current - toRightFrom) / (toRightTo - toRightFrom)
    $(el).css('left', $(el).width() / 2 * - 1 + $(el).width() * offsetRatio)
  }
}

// el 元素，current 目前卷动的距离
// showFrom & showTo 显示时机的起始和结束
// hideFrom & hideTo 消失时机的起始和结束
function showHideText(el, current, showFrom, showTo, hideFrom, hideTo) {
  if (current < showFrom) {
    $(el).css('opacity', 0)
  }

  if (current >= showFrom && current <= showTo) {
    $(el).css('opacity', (current - showFrom) / (showTo - showFrom))
  }

  if (typeof hideFrom !== 'undefined' && typeof hideTo !== 'undefined') {
    if (current > hideFrom && current <= hideTo) {
      $(el).css('opacity', (hideTo - current) / (hideTo - hideFrom))
    }

    if (current > hideTo) {
      $(el).css('opacity', 0)
    }
  }
}
