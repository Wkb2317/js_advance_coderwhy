function debounce(fn, delay = 1000,immediate,resultCallback) {
  let timer = null
  let isStarted = false  // 是否已经执行过

  function _debounce(...args) {
    return new Promise( (resolve, reject) =>{
      if (timer) {
        clearTimeout(timer)
      }
      if(immediate && !isStarted){  // 立即执行
        const value = fn.apply(this, args)
        // 1. 使用回调函数
        if(resultCallback && typeof resultCallback === 'function') {
          resultCallback(value)  // 将传入的函数结果暴露出去
        }
        // 2. 使用promise
        resolve(value)
        isStarted = true
      }
      timer = setTimeout(() => {
        const value =  fn.apply(this, args)
        resolve(value)
        if(resultCallback && typeof resultCallback === 'function') {
          resultCallback(value)
        }
        isStarted = false
      }, delay)
    })
  }

  _debounce.cancel = function () {
    if (timer) {
      clearTimeout(timer)
      console.log('已取消')
    }
    timer = null
  }

  return _debounce
}
