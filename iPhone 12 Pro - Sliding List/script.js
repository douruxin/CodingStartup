const rows = document.querySelectorAll('#ui ul li')
const html = document.documentElement

document.addEventListener('scroll', (e) => {
  let scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight)

  let total = 1 / rows.length

  for (let [index, row] of rows.entries()) {
    let start = total * index
    let end = total * (index + 1)

    let progress = (scrolled - start) / (end - start)
    if (progress >= 1) progress = 1
    if (progress <= 0) progress = 0

    row.style.setProperty('--progress', progress)
  }
})
