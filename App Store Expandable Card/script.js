$('.card').on('click', function (e) {
  let card = $(e.currentTarget)
  let card_offset_scrollTop = $(card).offset().top - $(window).scrollTop()
  
  $(card).css('--data-offset-top', card_offset_scrollTop * -1 + 'px')

  $(card).toggleClass('active')

  // 图片被放大的比例（高度需减去这个比例）
  let ratio = 480 / 420
  let height = $(window).height()
  height -= $(card).find('img').outerHeight() * ratio
  height -= $(card).find('h4').outerHeight() * ratio
  height /= ratio

  $(card).find('.content').css('height', height)
  
  if ($(card).hasClass('active')) {
    $('body').addClass('no-scroll')
  } else {
    $('body').removeClass('no-scroll')
  }
})