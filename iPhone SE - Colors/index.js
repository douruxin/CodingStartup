window.addEventListener('scroll', (e) => {
  let noStickyOffset = document.documentElement.clientHeight * 2

  // 卷动的百分比 = 目前的卷动距离 / (页面的总高度 - 视窗的宽度)
  // let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  let scrolled = document.documentElement.scrollTop / noStickyOffset

  // console.log(scrolled)

  let $white = document.querySelector('.white')
  let $red = document.querySelector('.red')

  $white.style.clipPath = `inset(${((0.5 - scrolled) / 0.5) * 100}% 0px 0px 0px)`
  $red.style.clipPath = `inset(${((1 - scrolled) / 0.5) * 100}% 0px 0px 0px)`

  if (scrolled >= 1) {
    document.querySelector('.sticky-container').classList.add('no-sticky')
  } else {
    document.querySelector('.sticky-container').classList.remove('no-sticky')
  }
})