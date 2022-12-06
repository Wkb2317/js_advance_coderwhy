/**
 * kbApply
 * @param {*} thisArg
 * @param {*} array
 * @returns
 */
Function.prototype.kbApply = function (thisArg, array) {
  // 谁调用call，根据隐式绑定，this指向谁
  let fn = this
  // 将传入要改变的this对象转成对象
  let _this =
    thisArg === null || thisArg === undefined ? window : Object(thisArg)
  _this.fn = fn

  return _this.fn(...array)
}

function foo(num1, num2) {
  console.log(this.name, num1 + num2)
}

foo.kbApply({ name: 'wkb' }, [10, 20])

/**
 * kbCall
 * @param {*} thisArg
 * @param  {...any} args
 * @returns
 */
Function.prototype.kbCall = function (thisArg, ...args) {
  let fn = this
  let _this =
    thisArg === null || thisArg === undefined ? window : Object(thisArg)
  _this.fn = fn

  return _this.fn(...args)
}

foo.kbCall({ name: 'wkb' }, 10, 20)

/**
 * kbBind
 * @param {*} thisArg
 * @param  {...any} args
 * @returns
 */
Function.prototype.kbBind = function (thisArg, ...args) {
  let fn = this
  let _this =
    thisArg === null || thisArg === undefined ? window : Object(thisArg)
  _this.fn = fn

  return function (...remain) {
    return _this.fn(...args, ...remain)
  }
}

const fn = foo.kbBind({ name: 'wkb' }, 10)
fn(10)
