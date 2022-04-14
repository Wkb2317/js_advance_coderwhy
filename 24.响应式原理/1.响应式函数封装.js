let reactiveFns = []

function watchFn(fn) {
  reactiveFns.push(fn)
}

const obj = {
  name: 'wkb',
  age: 12,
}

function foo() {
  console.log('name被修改')
}

function bar() {
  console.log('普通函数')
}

watchFn(foo)
watchFn(bar)

obj.name = 'coder'
reactiveFns.forEach(fn => {
  fn()
})
