// 无论传入什么值，都一样
const promise = Promise.reject({
  then: function (resolve, reject) {
    resolve('thenable')
  },
})

promise
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
