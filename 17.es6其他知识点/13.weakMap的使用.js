// 1. key只能是对象
// 2. 对key的对象是弱引用

let weakMap = new WeakMap()

const person = { name: 'wkb' }

weakMap.set(person, 'aaa')

// 3. get()
console.log(weakMap.get(person))

// 4. has()
console.log(weakMap.has(person))

// 5. delete()
weakMap.delete(person)
console.log(weakMap)

// 6. 不能遍历

// 7. 应用场景（vue3响应式原理）
