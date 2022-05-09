const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(111)
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

// 当其中一个promise的状态发生改变后，就返回状态改变的promise值
Promise.race([promise1, promise2, promise3])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log('err', err)
  })
