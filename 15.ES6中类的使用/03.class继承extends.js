class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + '  eating --- person')
  }
}

class Student extends Person {
  // extends 继承中
  // 使用this之前,必须使用super
  constructor(name, age, className) {
    super(name, age)
    this.className = className
  }

  studying() {
    console.log(this.name + ' studying')
  }

  // 重写父类函数
  eating() {
    super.eating() // 调用父类的函数
    console.log(this.name + '  eating --- student')
  }
}

let stu = new Student('wkb', 12, '一班')

stu.eating()
