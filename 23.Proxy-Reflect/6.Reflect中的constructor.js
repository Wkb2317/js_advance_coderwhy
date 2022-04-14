function Student(name) {
  this.name = name
}

function Teacher() {}

const stu = new Student('wkb')
// stu.__proto__.constructor = Teacher

// console.log(stu instanceof Student)

console.log(stu)

// 用student构造函数来生成Teacher类型对象
const teacher = Reflect.construct(Student, ['coder'], Teacher)

console.log(teacher)
