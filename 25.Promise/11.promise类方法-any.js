const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(111)
  }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222)
  }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(333)
  }, 3000)
})

// 返回首个fulfilled状态的promise值
// 如果所有的promise都为reject，则会指定报错
Promise.any([promise1, promise2, promise3])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log('err:', err)
  })
