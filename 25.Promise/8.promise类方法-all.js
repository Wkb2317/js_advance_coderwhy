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

// 如果传入的promise全都是fullfiled状态，则把成功结果放在数组中返回
//  如果当中有一个失败，则只返回失败的结果
Promise.all([promise1, promise2, promise3])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log('err', err)
  })
