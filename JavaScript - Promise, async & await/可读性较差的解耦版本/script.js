function callSteven(success, connectedCallback, disconnectedCallback) {
  console.log('Calling Steven...')
  setTimeout(() => {
    if (success) {
      (typeof connectedCallback === 'function') && connectedCallback()
    } else {
      (typeof disconnectedCallback === 'function') && disconnectedCallback()
    }
  }, 3000)
}

callSteven(false, () => {
  console.log('Steven picked up the phone.')
}, () => {
  console.log('Steven rejected the call.')
})