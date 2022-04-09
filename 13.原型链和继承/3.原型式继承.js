/**
 *  想达到的目的
 *  1. 子类的原型指向创建的新对象
 *  2. 新对象就是父类的原型对象
 * */

let Person = {
  name: 'why',
  age: 20,
}

// 1. 原型式函数
function createPrototype(obj) {
  let fn = function () {}
  fn.prototype = obj
  let newObj = new fn()
  return newObj
}

// 2. Object.setPrototypeOf
function createPrototype2(obj) {
  let newObj = {}
  Object.setPrototypeOf(newObj, obj)
  return newObj
}

var info = createPrototype2(Person)

//  3. Object.create
info = Object.create(Person)
console.log(info)
console.log(info.__proto__)
