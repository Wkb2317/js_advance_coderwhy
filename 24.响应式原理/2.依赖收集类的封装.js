// 通过类收集响应式函数
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const depend = new Depend()

function watchFn(fn) {
  depend.addDepend(fn)
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

// 手动执行
depend.notify()
