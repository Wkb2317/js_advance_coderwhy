// 1. 将普通对象转为promise
const obj = { name: 'wkb' }

// const promise = Promise.resolve(obj)

// promise.then(res => {
//   console.log(res)
// })

// 2. 传入一个promise
// const promise = Promise.resolve(
//   new Promise((resolve, reject) => {
//     resolve('success')
//   })
// )

// promise.then(res => {
//   console.log(res)
// })

// 3. 传入一个thenable对象
const promise = Promise.resolve({
  then: function (resolve, reject) {
    resolve('thenable')
  },
})

promise.then(res => {
  console.log(res)
})
