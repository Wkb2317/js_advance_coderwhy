function Person (name, age) {
  this.name = name
  this.age = age
  this.eating = function () {
    console.log(this.name + 'eating');
  }
}

let p1 = new Person('wkb', 12)
let p2 = new Person('coder', 20)
console.log(p1.eating === p2.eating); // false

//  每次new一个对象的的时候，每个对象里的方法都是重新创建的，
//  但是方法执行的代码都是一样的，浪费空间