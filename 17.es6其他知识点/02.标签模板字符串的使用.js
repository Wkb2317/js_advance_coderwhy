function foo(m, n, x) {
  console.log(m, n, x)
}

// foo('wkb', 12)
const name = 'wkb'
const age = 12

// 第一个参数是被分割的数组
// 第二个参数是第一个${}
foo`name:${name}age: ${age}`
