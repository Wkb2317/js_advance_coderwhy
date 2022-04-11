const finalRegistry = new FinalizationRegistry(value => {
  console.log('有对象被销毁', value)
})

let obj = {
  name: 'why',
}

// let info = obj // 强引用，obj不会被销毁
let info = new WeakRef(obj) // 对obj弱引用

// 如果源对象没有销毁，则WeakRef.deref可以获取到，否则undefined
// console.log(info.deref())

finalRegistry.register(obj, 'obj')

obj = null
