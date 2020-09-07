document.querySelector('#btn-click').onclick = sayHello

function sayHello() {
  window.alert('Hello!')
  sayWelcome()
}

function sayWelcome() {
  window.alert('Welcome to CodingStartup!')
}
