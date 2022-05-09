const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(222)
  }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(333)
  }, 3000)
})

// 只有全部的promise执行完之后，会反返回所有promise的状态和对应的值
Promise.allSettled([promise1, promise2, promise3]).then(res => {
  console.log(res)
})
