Promise.resolve()
  .then(() => {
    console.log(0)
    // 1 . return 4
    return Promise.resolve(4)
  })
  .then(res => {
    console.log(res)
  })

Promise.resolve()
  .then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })

/** 1. return 4
 * 0
 * 1
 * 4
 * 2
 * 3
 * 5
 * 6
 */

/** 1. return  Promise.resolve(4)
 * 不是普通的值，会多加一次微任务
 * Promise.resolve() 会多加一次微任务
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 */

/**
 * script start
 * async1 start
 * async2
 * promise1
 * promise2
 * script end
 * nextTick1
 * async1 end
 * promise3
 * setTimeout0
 * setImmediate
 * setTimeOut2
 */
