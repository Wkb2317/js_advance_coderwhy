Function.prototype.kbcall = function (thisArg, args) {
  // 可传递参数列表
  // if(Object.prototype.toString.call(args) !== "[object Array]"){
  //     throw Error('args must be a Array')
  // }
  // 1. 拿到调用函数的宿主
  let fn = this

  // 2. 判断传入的thisArg是什么类型,如果是null，或者underfined就让thisArg指向window
  //    如果是字符串，数字，布尔值，则转成对象类型
  let _this =
    thisArg !== undefined && thisArg !== null
      ? Object(thisArg)
      : typeof window === 'undefined'
      ? {}
      : window

  // 3. 为了改变this的指向，在thisArg中添加属性fn,通过thisArg.fn()，来隐式绑定传过来的this，继而达到改变this指向
  _this.fn = fn
  return _this.fn(...args)
}

function foo(num1, num2) {
  let num = num1 + num2
  console.log('foo执行:' + this + ' num: ' + num)
}

foo.kbcall(null, 1, 2)
