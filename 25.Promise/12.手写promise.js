const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        this.value = value
      }
    }

    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    if (this.status === STATUS_PENDING) return
    if (this.status === STATUS_FULFILLED) {
      onFulfilled(this.value)
    } else if (this.status === STATUS_REJECTED) {
      onRejected(this.reason)
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  reject('111')
  resolve('222')
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
