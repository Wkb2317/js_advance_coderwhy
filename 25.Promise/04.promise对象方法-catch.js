// const promise = new Promise((resolve, reject) => {
//   reject('rejected')
//   // resolve()
// })

// 1. 通过回调函数捕获
// promise.then(undefined, err => {
//   console.log(err)
// })

// 2.通过catch来捕获
// 不符合promise a+规范
// promise.catch(err => {
//   console.log(err)
// })

// promise
//   .then(res => {
//     // return 111
//     // return new Promise((resolve, reject) => {
//     //   reject('then rejected')
//     // })
//     throw new Error('---')
//   })
//   .catch(err => {
//     console.log(err)
//   })

// 3.拒绝捕获
// const promise = new Promise((resolve, reject) => {
//   reject('rejected')
// })

// // 如果没有捕获异常，则会报错
// promise.then(res => {
//   console.log(res)
// })

// promise.catch(err => {
//   // 单独调用，不会捕获
//   console.log(err)
// })

// 4. catch方法的返回值
const promise = new Promise((resolve, reject) => {
  reject('111')
})

promise
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
    return 'catch return'
  })
  .then(res => {
    console.log(res)
  })
