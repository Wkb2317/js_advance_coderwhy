function kbCurring(fn) {
  if (typeof fn !== 'function') {
    throw Error('请传入函数')
  }
  return function curring(...params) {
    if (params.length >= fn.length) {
      return fn.call(this, ...params)
    } else {
      // 参数没传完
      return function (...restArgs) {
        return curring.call(this, ...params, ...restArgs)
      }
    }
  }
}

function sum(a, b, c) {
  return a + b + c
}

const fn = kbCurring(sum)
const add20 = fn(10, 10)

console.log(add20(1))
