if (true) {
  var foo = 'foo'
  let bar = 'bar'
}

console.log(foo)
// console.log(bar)  访问不到
let key = '1'
switch (key) {
  case '1':
    var foo = 'foo'
    let bar = 'bar'
    break

  default:
    break
}

console.log(foo)
// console.log(bar)  访问不到

for (var index = 0; index < 10; index++) {
  console.log('first')
}

console.log(index)

for (let i = 0; i < 10; i++) {
  console.log('first')
}
// console.log(i) // 访问不到
