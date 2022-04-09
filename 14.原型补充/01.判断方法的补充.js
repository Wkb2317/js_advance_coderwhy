let person = {
  name: 'wkb',
  age: 12,
}

let info = Object.create(person, {
  address: {
    value: '淮南',
    configurable: true,
    enumerable: true,
    writable: true,
  },
})

// console.log(info)

// 1. Object.hasOwnProperty()
//  只会判断当前对象上有没有属性，不会去判断原型上有没有
console.log(info.hasOwnProperty('name ')) // false

//  2. in
// 当前属性上找不到会去原型上找
console.log('name' in info) // true
