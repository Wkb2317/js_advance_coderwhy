Function.prototype.kbbind = function (thisArg, ...args) {
	// 1. 拿到调用函数的宿主
	let fn = this

	// 2. 判断传入的thisArg是什么类型,如果是null，或者underfined就让thisArg指向window
	//    如果是字符串，数字，布尔值，则转成对象类型
	let _this = thisArg !== undefined && thisArg !== null ? Object(thisArg) : typeof window === 'undefined' ? {} : window

	// 3. 为了改变this的指向，在thisArg中添加属性fn,通过thisArg.fn()，来隐式绑定传过来的this，继而达到改变this指向
	// bind是返回一个改变this指向的函数
	function proxyFn(...newArgs) {
		_this.fn = fn
		let finalArgs = [...args, ...newArgs]
		return _this.fn(...finalArgs)
	}
	return proxyFn
}

function foo(num1, num2, num3, num4) {
	console.log('foo执行:' + num1 + num2 + num3 + num4)
}

let sun = foo.kbbind('123', 10, 20)
let res = sun(30, 40)
