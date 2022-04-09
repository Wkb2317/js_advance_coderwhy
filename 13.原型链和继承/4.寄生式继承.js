let person = {
  eating: function () {
    console.log('eating')
  },
}

function createStudent(name) {
  // 内部创建了一个对象，对象的原型是传入的对象，然后返回创建的对象
  var stu = Object.create(person)
  stu.name = name
  stu.studying = function () {
    console.log('studying')
  }
  return stu
}

let stuObj = createStudent('wkb')

console.log(stuObj)
stuObj.eating()
