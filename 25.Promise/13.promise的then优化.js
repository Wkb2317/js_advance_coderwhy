const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        this.value = value
        this.onFulfilledFns.forEach(fn => {
          fn(this.value)
        })
      }
    }

    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
        this.onRejectedFns.forEach(fn => {
          fn(this.reason)
        })
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    if (this.status === STATUS_PENDING) {
      // 异步情况,先暂存数组
      this.onFulfilledFns.push(onFulfilled)
      this.onRejectedFns.push(onRejected)
    } else if (this.status === STATUS_FULFILLED) {
      onFulfilled(this.value)
    } else if (this.status === STATUS_REJECTED) {
      onRejected(this.reason)
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  // 如果是异步状态下，此时promise的状态还是pending
  setTimeout(() => {
    reject('111')
  }, 1000)
})

promise.then(
  res => {
    console.log('res1:', res)
  },
  err => {
    console.log('err1:', err)
  }
)

promise.then(
  res => {
    console.log('res2:', res)
  },
  err => {
    console.log('err2:', err)
  }
)
