function callSteven(success) {
  console.log('Calling Steven...')
  setTimeout(() => {
    if (success) {
      connected()
    } else {
      disconnected()
    }
  }, 3000)
}

function connected() {
  console.log('Steven picked up the phone.')
}

function disconnected() {
  console.log('Steven rejected the call.')
}

callSteven(true)