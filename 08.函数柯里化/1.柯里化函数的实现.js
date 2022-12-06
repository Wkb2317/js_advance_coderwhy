function kbCurring(fn) {
  return function curried(...args) {
    // 如果当前的传递的参数个数与接收到的参数一致，则执行函数
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      // 如果参数小于原本的参数，则继续返回函数，递归调用
      return function (...args2) {
        // 把第二次传递的参数与前面的传递的参数组合在一起
        return curried.apply(this, [...args, ...args2])
      }
    }
  }
}

function add(x, y, z) {
  return x + y + z
}

let curring = kbCurring(add)
console.log(curring(1, 2)(3))
