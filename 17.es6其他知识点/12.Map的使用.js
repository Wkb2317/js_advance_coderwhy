// 1. 对象不能用对象作为key
const obj1 = { name: 'wkb' }
const obj2 = { name: 'coder' }

// let person = {
//   [obj1]: '11',
//   [obj2]: '22', // 存放的是对象的toString,则obj2会覆盖obj1
// }

// console.log(person)

// 2. Map.set()
const map = new Map()
map.set(obj1, 'aaa')
map.set(obj2, 'bbb')
console.log(map)

const map2 = new Map([
  [obj1, 'aaa'],
  [obj2, 'bbb'],
])

console.log(map2)

// 3. map.get()

// 4. map.has()

// 5. map.clear()

// 6. 遍历map
// forEach
map.forEach((value, key) => {
  console.log(key, value)
})

for (const item of map2) {
  console.log(item)
}
