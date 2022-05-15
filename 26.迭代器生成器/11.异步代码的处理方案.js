function request(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 1000)
  })
}

// 1. promise then回调
// request('aaa')
//   .then(res => {
//     return request(res + 'bbb')
//   })
//   .then(res => {
//     return request(res + 'ccc')
//   })
//   .then(res => {
//     console.log(res)
//   })

// 2. 生成器 + promise
function* allRequest() {
  const res1 = yield request('aaa')
  const res2 = yield request(res1 + 'bbb')
  const res3 = yield request(res2 + 'ccc')
  console.log(res3)
}

// 自动执行
function execGenerator(fn) {
  const generator = fn() // 生成器
  function exec(res) {
    const result = generator.next(res)
    // 执行完
    if (result.done) {
      return result.value
    }
    // 未执行完
    result.value.then(res => {
      exec(res)
    })
  }
  // 第一次不用传参
  exec()
}
// execGenerator(allRequest)

// 3. co包

// 4. async/await
async function allRequest() {
  const res1 = await request('aaa')
  const res2 = await request(res1 + 'bbb')
  const res3 = await request(res2 + 'ccc')
  console.log(res3)
}
allRequest()
