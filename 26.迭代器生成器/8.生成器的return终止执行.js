function* foo(num) {
  console.log('函数开始执行')

  const value = num * 100
  const n = yield value

  console.log(n)
  yield n * value

  console.log('2')
  yield 'ccc'
  console.log('3')
}

// 本质上是一个特殊的迭代器
const generator = foo(2)
console.log(generator.next())
// 如果使用了return，就提前终止生成器函数
console.log(generator.return(2))
