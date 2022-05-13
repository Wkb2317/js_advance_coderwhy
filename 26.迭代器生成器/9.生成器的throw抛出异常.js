function* foo(num) {
  console.log('start')

  const count = num * 100
  let n
  try {
    n = yield count
  } catch (error) {
    console.log('err:', error)
  }

  yield n * count

  console.log('2')
  yield 'ccc'

  console.log('end')
}

// 本质上是一个特殊的迭代器
const generator = foo(2)
console.log(generator.next())

console.log(generator.throw(2))
