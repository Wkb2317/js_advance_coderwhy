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

    // 如果不加的话，catch第一个传入的是undefined，则后续的就是rejected状态，与之前状态不一致
    onFulfilled =
      onFulfilled ||
      (value => {
        return value
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
    // 返回promise
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(onFinally, onFinally)
  }

  static resolve(value) {
    return new MyPromise(resolve => {
      resolve(value)
    })
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => {
      reject(value)
    })
  }

  static all(allPromise) {
    return new MyPromise((resolve, reject) => {
      const values = []
      allPromise.forEach(promise => {
        promise.then(
          res => {
            values.push(res)
            if (values.length === allPromise.length) {
              resolve(values)
            }
          },
          err => {
            reject(err)
          }
        )
      })
    })
  }

  static allSettled(allPromise) {
    return new MyPromise((resolve, reject) => {
      const values = []
      allPromise.forEach(promise => {
        promise.then(
          res => {
            values.push({ status: STATUS_FULFILLED, value: res })
            if (values.length === allPromise.length) {
              resolve(values)
            }
          },
          err => {
            values.push({ status: STATUS_REJECTED, value: err })
            if (values.length === allPromise.length) {
              resolve(values)
            }
          }
        )
      })
    })
  }
}

const p1 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve('111')
  }, 1000)
})

const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('222')
  }, 2000)
})

const p3 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve('333')
  }, 3000)
})

// MyPromise.all([p1, p2, p3]).then(
//   res => {
//     console.log(res)
//   },
//   err => {
//     console.log(err)
//   }
// )

MyPromise.allSettled([p1, p2, p3]).then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
