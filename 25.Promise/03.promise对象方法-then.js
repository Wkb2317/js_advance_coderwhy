/**
 *  promise原型上的方法
 *  1. constructor
 *  2. then
 *  3. finally
 */

// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

// 1. 同一个promise可以调用多次
let promise = new Promise((resolve, reject) => {
  resolve('success')
})

promise.then(res => {
  console.log(res)
})

promise.then(res => {
  console.log(res)
})

// 2. then的回调函数可以返回值
//    then本身会返回一个promise
// （1）如果我们返回一个普通值，那这个普通值会被作为一个新的promise的resolve值

promise
  .then(res => {
    return 'aaaa'
  })
  .then(res => {
    console.log(res)
  })

//  (2) 如果返回的是一个promise
promise
  .then(res => {
    return new Promise((resolve, reject) => {
      resolve(111)
    })
  })
  .then(res => {
    console.log(res)
  })

// (3) 如果返回一个对象，并且该对象实现了thenable
promise
  .then(res => {
    return {
      then: function (resolve, reject) {
        resolve(222)
      },
    }
  })
  .then(res => {
    console.log(res)
  })
