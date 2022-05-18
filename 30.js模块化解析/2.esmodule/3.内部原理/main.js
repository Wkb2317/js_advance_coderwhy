import { foo, name } from './foo.js'

console.log('后续代码是不会执行的')

// import函数
// import('./foo.js').then(res => {
//   console.log('res:', res.foo())
// })

setTimeout(() => {
  console.log(name)
}, 2000)
console.log(name)

// 报错，不能修改导入的值
// name = 'coder'
