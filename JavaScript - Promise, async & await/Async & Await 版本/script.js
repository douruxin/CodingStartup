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

// IIFE 写法：定义为匿名函数然后立即执行
(async () => {
  try {
    await callSteven(false)
    console.log('Steven picked up the phone.')
  } catch (error) {
    console.log('Steven rejected the call.')
  }
})()