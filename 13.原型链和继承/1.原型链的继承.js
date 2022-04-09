function Person() {
  this.eating = function () {
    console.log('eating')
  }
  this.name = 'wkb'
}

function Student(age) {
  this.age = age
}

Student.prototype = new Person()
Student.prototype.studying = function () {
  console.log('studying')
}

let stu = new Student(20)
stu.studying()

// 弊端
// 1. 不会打印父类上的属性

// 2. 在修改父类上继承来的对象的时候，相互之间会影响

// 3. 不能对继承来的属性进行传参配置
