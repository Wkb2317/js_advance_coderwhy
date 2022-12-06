function compose(...fns) {
  // 1. 参数校验
  if (fns.length <= 1) {
    throw Error('参数长度要大于1')
  }
  fns.forEach((fn) => {
    if (typeof fn !== 'function') {
      throw Error('数组内参数必须是函数')
    }
  })

  // 2.返回函数
  return function (...params) {
    // 3.  获取第一个函数结果
    let res = fns[0].call(this, ...params)
    // 4. 遍历执行函数
    for (let i = 1; i < fns.length; i++) {
      res = fns[i].call(this, res)
    }
    return res
  }
}

function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

let composed = compose(double, square)

console.log(composed(10))
