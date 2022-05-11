// const iterator = {
//   next: function () {
//     return { done: true, value: 123 }
//   },
// }

const names = ['aaa', 'bbb', 'ccc']

// 创建迭代器对象
let index = 0
const namesIterator = {
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  },
}

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
