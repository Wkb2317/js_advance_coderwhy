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

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depend.notify()
  },
})

function foo() {
  console.log('name被修改')
}
function bar() {
  console.log('普通函数')
}

watchFn(foo)
watchFn(bar)

objProxy.name = 'coder'
