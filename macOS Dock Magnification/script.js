document.querySelectorAll('.dock li').forEach(li => {
  li.addEventListener('click', e => {
    e.currentTarget.classList.add('loading')
  })

  li.addEventListener('mousemove', e => {
    let item = e.target
    // 图标所在的 li 容器的宽度
    let itemRect = item.getBoundingClientRect()
    // 计算鼠标在图标上的位置
    let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width
    // 获取当前鼠标所在的图标，前一个以及后一个的 li 元素
    let prev = item.previousElementSibling || null
    let next = item.nextElementSibling || null
    
    let scale = 0.6

    resetScale()

    if (prev) {
      // offset - 1 是因为现在正在设定左边的元素，所以 offset 的值要相反
      // 即是将 0 至 1 改为 1 至 0
      prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
    }

    item.style.setProperty('--scale', 1 + scale)

    if (next) {
      next.style.setProperty('--scale', 1 + scale * offset)
    }
  })
})

document.querySelector('.dock').addEventListener('mouseleave', e => {
  resetScale()
})

// 重置 Scale 样式
function resetScale() {
  document.querySelectorAll('.dock li').forEach(li => {
    li.style.setProperty('--scale', 1)
  })
}