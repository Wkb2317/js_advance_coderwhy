function* foo() {
  console.log('函数开始执行')
  yield
  console.log('1')
  yield
  console.log('2')
  yield
  console.log('3')
}

const generator = foo()

generator.next()
generator.next()
generator.next()
generator.next()
generator.next()
