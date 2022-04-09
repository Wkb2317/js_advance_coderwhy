
Function.prototype.kbapply = function (thisArg,args){
    // 只能传数组，undefined，null
    const type = bject.prototype.toString.call(args)
    if(type !== "[object Array]" && type !== '[object Undefiend]' &&  type !== "[object Null]"  ){
        throw Error('args must be a Array')
    }
    // 1. 拿到调用函数的宿主
    let fn = this

    // 2. 判断传入的thisArg是什么类型,如果是null，或者underfined就让thisArg指向window
    //    如果是字符串，数字，布尔值，则转成对象类型
    let _this = thisArg ? Object(thisArg) : ( typeof (window) === 'undefined' ? {} : window );

    // 3. 为了改变this的指向，在thisArg中添加属性fn,通过thisArg.fn()，来隐式绑定传过来的this，继而达到改变this指向
    _this.fn = fn
    let res = null
    Object.prototype.toString.call(args) === "[object Null]" ? res = _this.fn() : res = _this.fn(...args)
    return res

}

function  foo(num1,num2) {
    let num = num1 + num2
    console.log('foo执行:' + this + ' num: ' + num)
}

foo.kbapply(null,[10,30])


