async function foo() {
  // return 'aaa'
  // return {
  //   then: function (resolve) {
  //     resolve('bbb')
  //   },
  // }

  return new Promise((resolve, reject) => {
    resolve('ccc')
  })
}

// 异步函数返回值是一个promise
const promise = foo()
promise.then(res => {
  console.log(res)
})
