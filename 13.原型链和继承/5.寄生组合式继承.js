function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.eating = function () {
  console.log('eating')
}

Person.prototype.runing = function () {
  console.log('runing')
}

function Student(name, age, className, studentId) {
  Person.call(this, name, age)
  this.className = className
  this.studentId = studentId
}

inherit(Student, Person)

// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student // 不重新指向话，打印出来的stu是Person类型

let stu1 = new Student('wkb', 20, 'compute', '20181251150')

stu1.eating()

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
