// 生成器替换迭代器
function* createArrayIterator(arr) {
  // 1. 普通迭代器
  // let index = 0
  // return {
  //   next: function () {
  //     if (index < arr.length) {
  //       return { done: false, value: arr[index++] }
  //     } else {
  //       return { done: true, value: undefined }
  //     }
  //   },
  // }
  // 2. yield
  // for (let item of arr) {
  //   yield item
  // }
  // 3. yield* 后跟一个可迭代对象
  yield* arr
}

const names = ['aaa', 'bbb', 'ccc']
const namesIterator = createArrayIterator(names)

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
