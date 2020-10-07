function callSteven(success) {
  return new Promise((resolve, reject) => {
    console.log('Calling Steven...')
    setTimeout(() => {
      if (success) {
        resolve()
      } else {
        reject()
      }
    }, 3000)
  })
}

callSteven(false)
  .then(() => {
    console.log('Steven picked up the phone.')
  })
  .catch(() => {
    console.log('Steven rejected the call.')
  })