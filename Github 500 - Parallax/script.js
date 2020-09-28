document.querySelector("#parallax_wrapper").addEventListener("mousemove", function (e) {
  let horizontal = e.clientX / parseInt(getComputedStyle(document.querySelector("#parallax_wrapper")).width, 10)
  let vertical = e.clientY / parseInt(getComputedStyle(document.querySelector("#parallax_wrapper")).height, 10)

  document.querySelector("#parallax_bg").style.transform = calculateTransform(horizontal, vertical, 5)
  document.querySelector("#parallax_error_text").style.transform = calculateTransform(horizontal, vertical, 20)
  document.querySelector("#parallax_octocat").style.transform = calculateTransform(horizontal, vertical, 10)
  document.querySelector("#parallax_sign").style.transform = calculateTransform(horizontal, vertical, -10)
})

function calculateTransform(horizontal, vertical, offset) {
  return `translate(${ (horizontal * offset) / 0.5 }px, ${ (vertical * offset) / 0.5 }px)`
}
