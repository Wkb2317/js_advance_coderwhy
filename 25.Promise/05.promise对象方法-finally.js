// 无论promise的状态，都会执行
const promise = new Promise((resolve, reject) => {
  // resolve('resolve message')
  reject('reject message')
})

promise
  .then(res => {
    console.log('res:', res)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('finally')
  })
