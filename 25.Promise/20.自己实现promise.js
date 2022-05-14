// const promise1 = new Promise((resolve, reject) => {})

// const promise2 = new Promise((resolve, reject) => {
//   resolve('aaa')
// })

// const promise3 = new Promise((resolve, reject) => {
//   reject('err')
// })

// console.log(promise1)
// console.log(promise2)
// console.log(promise3)

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.status = 'pending' // promise默认状态
    this.value = undefined
    // 保存then传入的函数
    this.onFulFilledFns = []
    this.onRejectedFns = []

    this.resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onFulFilledFns.forEach(fn => {
          fn(this.value)
        })
      }
    }

    this.reject = err => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.value = err
        this.onRejectedFns.forEach(fn => {
          fn(this.value)
        })
      }
    }

    // 在new proimse时会传入一个函数，接受两个参数，并立即执行
    executor(this.resolve, this.reject)
  }

  then(onFulFilled, onRejected) {
    if (this.status === PENDING) {
      this.onFulFilledFns.push(onFulFilled)
      this.onRejectedFns.push(onRejected)
    } else if (this.status === FULFILLED) {
      onFulFilled(this.value)
    } else if (this.status === REJECTED) {
      onRejected(this.value)
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('aaa')
  }, 1000)
})

promise.then(
  res => {
    console.log('success:', res)
  },
  err => {
    console.log('err:', err)
  }
)
