new Promise((resolve, reject) => {
  //  pending状态
  console.log('----------')
  // 状态被改变后就不能再被改变
  resolve('success') // fullfilled
  reject('error') // rejected
}).then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
