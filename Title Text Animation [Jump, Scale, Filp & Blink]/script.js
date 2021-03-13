const h1 = document.querySelector('h1')

// 运用正则表达式，反斜号 S 代表搜索每一个非空白的字符
// 通过 .replace 替换成加上了 <span> 标签的内容
// $& 代表正则中匹配到出来的模式 (Pattern)，在这里亦即是搜索到的每一个字母
h1.innerHTML = h1.textContent.replace(/\S/g, '<span>$&</span>')

document.querySelectorAll('span').forEach((span, index) => {
  span.style.setProperty('--delay', `${index * 0.1}s`)
})

document.querySelectorAll('button').forEach((button, index) => {
  button.addEventListener('click', e => {
    h1.style.setProperty('--animation', e.target.getAttribute('data-animation'))

    h1.classList.remove('animate')

    /**
     * 在添加 animate class 之前，先移除 animate class
     * !bug 不过仍然触发不了第二次动画
     * 
     * ?解决办法：
     *  这与浏览器为了提升渲染性能有关，
     *  因为我们在移除 animate class 之后，立即有套用上 animate 这个 class
     *  浏览器会认为版面并没有改变，所以就没有重新渲染画面
     *  解决方法是在移除 class 之后，加入 void h1.offsetWidth
     *  意思是要查询一下 offsetWidth
     *  这时浏览器就会被迫计算一下，执行称为 Reflow 的操作
     *  当我们再套用 class 时动画就会被再次触发了
     */
    void h1.offsetWidth
    h1.classList.add('animate')
  })
})
