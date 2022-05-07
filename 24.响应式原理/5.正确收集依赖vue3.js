// 设置全局变量，收集数据改变时需要回调的函数
let activeReactiveFn = null

// 通过类收集响应式函数
class Depend {
  constructor() {
    // 用Set去除重复
    this.reactiveFns = new Set()
  }

  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 获取depend
function getDepend(target, key) {
  // 根据target获取map
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key获取map中的depend
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }

  return depend
}

// 把对象变成响应式对象，然后return
function reactive(obj) {
  // 代理对象
  return new Proxy(obj, {
    get(target, key, receiver) {
      // 在get中收集依赖
      const depend = getDepend(target, key)
      depend.depend()
      return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      const depend = getDepend(target, key)
      depend.notify()
    },
  })
}

/**
 *  Map中存储key和对应的depend类
 *  weakMap 中存储target - 属性对应的Map
 * */
let targetMap = new WeakMap()
const depend = new Depend()

function watchFn(fn) {
  activeReactiveFn = fn
  fn() // 执行回调函数， 回调函数中触发了get
  activeReactiveFn = null
}

// 源对象
const objProxy = reactive({
  name: 'wkb',
  age: 12,
})

watchFn(function () {
  // 调用get
  console.log(objProxy.name, '++++')
})

watchFn(() => {
  console.log(objProxy.age, '+++')
})

objProxy.name = 'coder'
objProxy.age = 20
