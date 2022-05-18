// import { foo } from './foo'

console.log('后续代码是不会执行的')

// import函数
import('./foo.js').then(res => {
  console.log('res:', res.foo())
})
