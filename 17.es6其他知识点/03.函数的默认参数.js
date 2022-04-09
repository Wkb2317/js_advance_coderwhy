// 默认值最好放最后
function foo(m, n = 12) {
  console.log(m, n)
}

// 默认值位置开始，之后都不算在之内
console.log(foo.length)

// foo('wkb')

function printInfo({ name, age } = { name: 'wkb', age: 12 }) {
  console.log(name)
  console.log(age)
}

printInfo()
