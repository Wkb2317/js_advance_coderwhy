const foo = () => {}
// 没有原型
// 没有this
// 没有arguments
console.log(foo.prototype)
// foo is not a constructor
const b = new foo()
