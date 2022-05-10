const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

/**
 * @description:
 * @param {*} execFn
 * @param {*} value
 * @param {*} resolve
 * @param {*} reject
 * @return {*}
 */
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const data = execFn(value)
    resolve(data)
  } catch (error) {
    reject(error)
  }
}

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
          fn()
        })
      }
    }

    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
        this.onRejectedFns.forEach(fn => {
          fn()
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
    // 给onRejected默认值
    // 在catch中调用
    onRejected =
      onRejected ||
      (err => {
        throw err
      })

    // 实现链式调用
    return new MyPromise((resolve, reject) => {
      console.log(this.status)
      if (this.status === STATUS_PENDING) {
        // 异步情况,先暂存数组
        if (onFulfilled)
          this.onFulfilledFns.push(() => {
            execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
          })
        if (onRejected)
          this.onRejectedFns.push(() => {
            execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
          })
      } else if (this.status === STATUS_FULFILLED) {
        // 如果then传入的第一参数没有返回值，则在onFulfilled传入之前的值就行
        // 如果then传入的函数有返回值，则获取到返回值，then回调的函数返回值都是成功状态
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      } else if (this.status === STATUS_REJECTED) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }
    })
  }

  catch(onRejected) {
    this.then(undefined, onRejected)
  }
}

const promise = new MyPromise((resolve, reject) => {
  // 如果是异步状态下，此时promise的状态还是pending
  throw new Error('bbb')
})
  .then(res => {
    console.log('res1:', res)
  })
  .catch(err => {
    console.log('err2:', err)
  })

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('111')
//   }, 1000)
// })
//   .then(() => {
//     return 'aaa'
//   })
//   .then(res => {
//     console.log('res:', res)
//   })
