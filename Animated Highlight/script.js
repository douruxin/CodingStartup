// 当页面卷动到可视范围时执行下划线动画
// entries: 我们要监听的元素
let observer = new IntersectionObserver((entries, observer) => {
  // callback 会在每次监听名单上有元素改变状态时触发
  // 换句话说，即是被监听的元素出现或离开可视范围时都会触发
  entries.forEach(entry => {
    // 当 entry.isIntersecting 返回 true 的时候，即是元素是在可视范围内
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
      // 而由于每个 mark 元素的下划线动画只会做一次，所以在成功触发后
      // 加入 observer.unobserve(entry.target) 将监听移除就可以了
      observer.unobserve(entry.target)
    }
  })
})

document.querySelectorAll('mark').forEach(mark => {
  // 将每一个 mark 元素都加入到监听名单内
  observer.observe(mark)
})
