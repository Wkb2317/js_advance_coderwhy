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

/**
 *  weakMap 中存储target - 属性对应的Map
 *  Map中存储key和对应的depend类
 *
 * */
let targetMap = new WeakMap()
// 获取depend

function getDepend(target, key) {
  // 根据target获取map
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 更具key获取depend
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }

  return depend
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
    const depend = getDepend(target, key)
    depend.notify()
  },
})

watchFn(function () {
  console.log('name修改')
})
watchFn(function () {
  console.log('age修改')
})

objProxy.name = 'coder'
