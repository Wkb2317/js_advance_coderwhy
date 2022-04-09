function compose(...fns){
//  1. 检测传入的是否是函数
  fns.forEach(item => {
    // console.log(typeof item);
    if(typeof item !== 'function'){
      throw new Error('args muste be a function')
    }
  })

  //  2. 取出参数的长度
  const len = fns.length;

  // 3.  遍历，调用每次的函数，取出result
  return function (...args) {
    let index = 0

    // 如果传入的函数不止一个，则第一个函数运行结果时第二个函数的参数,以此类推
    // 当没有传入函数时，则形参就是传入的参数
    let result = len ? fns[index].apply(this,args) : args
    while ( ++index < len){
      result = fns[index].call(this,result)
    }
    return result
  }
}


function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

let composed =  compose(double,square)

console.log(composed(10));