// 1. ||= 逻辑或
// let message = undefined
// message = message || 'default value'
// message ||= 'default value'
// console.log(message)

// 2. &&= 逻辑与
// const obj = {
//   name: 'wkb',
//   foo() {
//     console.log('foo被调用')
//     return 1
//   },
// }
// obj.foo && obj.foo()

// let info = {
//   name: 'wkb',
// }
// info &&= info.name
// console.log(info)

// 3. ??= 逻辑空
let info
info ??= 'wkb'
console.log(info)
