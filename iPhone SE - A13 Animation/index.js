window.addEventListener('scroll', (e) => {
  // 卷动的百分比 = 目前的卷动距离 / (页面总高度 - 视窗高度)
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  // console.log(scrolled) 0 ~ 1

  let $h1 = document.querySelector('h1')
  let $theChip = document.querySelector('#the-chip')
  let $A13 = document.querySelector('#A13')
  let $A13TextBg = document.querySelector('#the-chip .text-bg')

  // 首先，要在卷动页面的时候放大缩小晶片
  /* 
    页面卷动到最低时（放到最大时），它的大小会等于：
      视窗宽度 * 20 * 卷动的百分比 * 卷动的百分比
   */
  $theChip.style.width = $theChip.style.height = document.documentElement.clientWidth * 20 * (scrolled ** 3) + 'px'

  if (scrolled <= 0.1) {
    // $A13.style.opactiy = 1
    $h1.style.opacity = (0.1 - scrolled) / 0.1
    $h1.style.marginTop = scrolled * 1000 * -1 + 'px'
  } else {
    $h1.style.opacity = 0
  }

  if (scrolled <= 0.2) {
    $A13.style.opacity = (scrolled - 0.1) / 0.1
  } else {
    $A13.style.opacity = 1
  }

  if (scrolled >= 0.5) {
    $A13TextBg.style.opacity = (1 - scrolled) / 0.5
    $theChip.classList.add('transparent')
  } else {
    $A13TextBg.style.opacity = 1
    $theChip.classList.remove('transparent')
  }

  if (scrolled >= 0.95) {
    $theChip.style.opacity = (1 - scrolled) / 0.05
  } else {
    $theChip.style.opacity = 1
  }
})
