function Person (name, age) {
  this.name = name
  this.age = age
  this.eating = function () {
    console.log(this.name + 'eating');
  }
}

let p1 = new Person('wkb', 12)
console.log(p1); // 有类型的对象
p1.eating()
/**
 * 问: 用new创建一个对象的时候,构造函数内部做了什么处理？
 *  1. 创建一个空对象
 *  2. 该空对象的__proto__属性指向构造函数的原型对象
 *  3. 执行构造函数中的代码
 *  4. return this指向的对象
 * */