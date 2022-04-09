function inherit(subObj, superObj) {
  let Fn = function () {}
  Fn.prototype = superObj.prototype
  subObj.prototype = new Fn()

  Object.defineProperty(subObj.prototype, 'constructor', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: subObj,
  })
}

function Person() {}

function Student() {}

inherit(Student, Person)

let stu = new Student()

// 判断对象实例是不是在构造函数的原型链上
console.log(stu instanceof Person)
