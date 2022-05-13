function* foo() {
  console.log('函数开始执行')
  yield 'aaa'
  console.log('1')
  yield 'bbb'
  console.log('2')
  yield 'ccc'
  console.log('3')
}

// 本质上是一个特殊的迭代器
const generator = foo()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
