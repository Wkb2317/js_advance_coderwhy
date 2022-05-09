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

    // new时就会执行传入的函数
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    // 实现链式调用
    return new MyPromise((resolve, reject) => {
      if (this.status === STATUS_PENDING) {
        // 异步情况,先暂存数组
        this.onFulfilledFns.push(() => {
          try {
            const value = onFulfilled(this.value)
            resolve(value)
          } catch (error) {
            reject(error)
          }
        })
        this.onRejectedFns.push(() => {
          try {
            const reason = onRejected(this.reason)
            resolve(reason)
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.status === STATUS_FULFILLED) {
        try {
          const value = onFulfilled(this.value)
          resolve(value)
        } catch (error) {
          reject(error)
        }
      } else if (this.status === STATUS_REJECTED) {
        try {
          const reason = onRejected(this.reason)
          resolve(reason)
        } catch (error) {
          reject(error)
        }
      }
    })
  }
}

const promise = new MyPromise((resolve, reject) => {
  // 如果是异步状态下，此时promise的状态还是pending
  resolve('111')
}).then(
  res => {
    console.log('res1:', res)
  },
  err => {
    console.log('err1:', err)
  }
)
