// 创建一个类，创建出来的对象都是可迭代对象
class ClassRoom {
  constructor(address, name, students) {
    ;(this.address = address), (this.name = name), (this.students = students)
  }

  entry(newStudent) {
    this.students.push(newStudent)
  }

  // 直接在类中写迭代器
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        }
      },
    }
  }
}

const classRoom = new ClassRoom('文源楼', 'a-101', ['tom', 'bob'])

for (let stu of classRoom) {
  console.log(stu)
}

// 对象中也可以写迭代器
const stu = {
  students: ['aaa', 'bbb'],
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        }
      },
    }
  },
}

for (let item of stu) {
  console.log(item)
}
