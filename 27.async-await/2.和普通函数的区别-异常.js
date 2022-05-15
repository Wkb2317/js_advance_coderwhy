async function foo() {
  console.log('foo start')
  throw new Error('error message')
  console.log('foo end')
}

// 异步函数返回值是一个promise
const promise = foo()
promise
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

console.log('zzz')
