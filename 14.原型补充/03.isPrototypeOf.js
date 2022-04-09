function Person() {}

let p = new Person()

// 判断调用的对象是不是传入对象的原型
console.log(Person.prototype.isPrototypeOf(p))
