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

    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onFulFilledFns.forEach(fn => {
          fn(this.value)
        })
      }
    }

    const reject = err => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.value = err
        this.onRejectedFns.forEach(fn => {
          fn(this.value)
        })
      }
    }

    // 在new proimse时会传入一个函数，接受两个参数，并立即执行
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulFilled, onRejected) {
    onFulFilled =
      onFulFilled ||
      (value => {
        return value
      })

    onRejected =
      onRejected ||
      (err => {
        throw new Error(err)
      })

    return new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 如果then没有返回值，则直接是resolve(undefined)
        // 如果有返回值，则拿到then的第一个函数的返回值，然后resolve出去
        // onFulfilled没有返回值时，value为undefined
        executorFnWhenCatchError(onFulFilled, resolve, reject, this.value)
      } else if (this.status === REJECTED) {
        // 在rejected中的返回值，用resolve传递状态
        executorFnWhenCatchError(onRejected, resolve, reject, this.value)
      } else if (this.status === PENDING) {
        // 如果在new promise中，使用的是异步调用呢，promise的状态改变是异步的
        // then的回调时同步的
        // 我们要怎么拿到异步之后resolve或者reject的值呢？
        // 将回调函数存起来？怎么拿到保存函数的返回值呢?我们可以给保存的函数包一层函数
        this.onFulFilledFns.push(() => {
          executorFnWhenCatchError(onFulFilled, resolve, reject, this.value)
        })
        this.onRejectedFns.push(() => {
          executorFnWhenCatchError(onRejected, resolve, reject, this.value)
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFulFilled) {
    this.then(onFulFilled, onFulFilled)
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value)
    })
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => {
      reject(value)
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(
          res => {
            resolve(res)
          },
          err => {
            resolve(err)
          }
        )
      })
    })
  }

  static all(promises) {
    const data = []
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(
          res => {
            data.push({ statu: 'fulfilled', value: res })
            if (data.length === promises.length) {
              resolve(data)
            }
          },
          err => {
            resolve({ statu: 'rejected', value: err })
          }
        )
      })
    })
  }

  static any(promises) {
    let index = 0
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(
          res => {
            resolve(data)
          },
          err => {
            index++
            if (index === promises.length) {
              resolve('AggregateError: No Promise in Promise.any was resolved')
            }
          }
        )
      })
    })
  }

  static allSettled(promises) {
    const data = []
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(
          res => {
            data.push({ statu: 'fulfilled', value: res })
            if (data.length === promises.length) {
              resolve(data)
            }
          },
          err => {
            data.push({ statu: 'rejected', value: err })
            if (data.length === promises.length) {
              resolve(data)
            }
          }
        )
      })
    })
  }
}

function executorFnWhenCatchError(fn, resolve, reject, value) {
  try {
    const res = fn(value)
    resolve(res)
  } catch (error) {
    reject(error)
  }
}

const promsie1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('aaa')
  }, 2000)
})

const promise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('bbb')
  }, 1000)
})

MyPromise.allSettled([promsie1, promise2]).then(res => {
  console.log(res)
})

// const promise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('aaa')
//   }, 1000)
// })
//   .then(
//     res => {
//       console.log('res1:', res)
//       throw new Error('error message')
//     },
//     err => {
//       console.log('err1:', err)
//     }
//   )
//   .then(res => {
//     console.log('res2:', res)
//   })
//   .catch(err => {
//     console.log('err2:', err)
//   })
//   .finally(() => {
//     console.log('finally')
//   })
