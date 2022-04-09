class Person {
  eating() {
    console.log('eating')
  }
}

function mixinRunner(BassClass) {
  class NewClass extends BassClass {
    running() {
      console.log('running')
    }
  }

  return NewClass
}

// 在js中类只能由一个父类：单继承
class Student extends Person {
  studying() {
    console.log('studying')
  }
}

let NewStduent = mixinRunner(Student)
let stu = new NewStduent()
stu.running()
