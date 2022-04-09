//  1. 创建Set结构
let set = new Set()
set.add(1)
set.add(20)
set.add(30)
set.add(1)

// 两个对象的地址不同，则属于不同的对象
// 会添加两个对象
set.add({})
set.add({})

const obj = {
  name: 'wkb',
}

// obj是同一个地址引用,则只会添加一个obj
set.add(obj)
set.add(obj)

// 数组去重
const arr = [11, 22, 33, 44, 11, 22]
// const newArr = []
// arr.forEach(item => {
//   if (newArr.indexOf(item) == -1) {
//     newArr.push(item)
//   }
// })
// console.log(newArr)

set = new Set(arr)
const newArr = [...set]
// console.log(newArr)

// size
console.log(set.size)

// has
console.log(set.has(11))

// delete
set.delete(11)
console.log(set)

// forEach
set.forEach(item => {
  console.log(item)
})

// clear
set.clear()
console.log(set)
