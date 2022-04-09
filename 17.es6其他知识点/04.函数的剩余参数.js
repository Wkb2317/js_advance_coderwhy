// 只能放到最后
function foo(m, ...res) {
  console.log(m)
  console.log(res)
}

foo('wkb', 12, 1.8)
