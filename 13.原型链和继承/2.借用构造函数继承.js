function Person(n, m) {
  this.eating = function () {
    console.log('eating')
  }
  this.name = n
  this.class = m
}

function Student(age, n, m) {
  this.age = age
  Person.call(this, n, m)
}

Student.prototype = new Person()
Student.prototype.studying = function () {
  console.log('studying')
}

let stu = new Student(20, 'wkb', '一班')
console.log(stu)

// 弊端
// 1. 调用了两次父类构造函数

// 2. 添加了一些不必要的属性
