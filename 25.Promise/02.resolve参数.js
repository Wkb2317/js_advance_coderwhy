/**
 * 1. 传入普通值
 * 2. 传入promise
 *    当前promise状态会移交给传入的promise
 * 3. 当传入的对象有then方法，并且实现了thenable接口
 *    那么会执行该then方法，并且用then方法决定后续状态
 */
const promise = new Promise((resolve, reject) => {
  resolve('err')
})

new Promise((resolve, reject) => {
  // resolve(promise)  // 会reject
  const obj = {
    then: (resolve, reject) => {
      reject('obj err')
    },
  }
  resolve(obj)
}).then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
