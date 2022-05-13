const promise1 = new Promise((resolve, reject) => {})

const promise2 = new Promise((resolve, reject) => {
  resolve('aaa')
})

const promise3 = new Promise((resolve, reject) => {
  reject('err')
})

console.log(promise1)
console.log(promise2)
console.log(promise3)

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    // promise默认状态
    this.status = 'pending'

    this.resolve = function () {}

    this.reject = function () {}

    executor(resolve, reject)
  }
}
