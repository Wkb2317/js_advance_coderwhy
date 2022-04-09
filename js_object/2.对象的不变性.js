// 1. 我们可以使用Object.definedProperty可以创建一个常量属性（不可变）
let person = {}
Object.defineProperty(person, 'num', {
	configurable: false,
	writable: false,
	value: 1
})
console.log(person.num)

// 2. 禁止对象添加新属性
// Object.preventExtensions(person)
person.name = 'wkb'
console.log(person.name) // 取不到值

// 3. 禁止对象添加新属性，当前对象属性不可配置。
// 可以用 Object.preventExtensions() 和 Object.defineProperty()把configurable改为false
// 有Object.seal()，密封对象。但是可以改变其现有属性值
Object.seal(person)
person.name = 'coder'
console.log(person.name) // 可改变
// Object.defineProperty(pserson, 'age', {   // 不可配置，报错
//   writable: true,
// })
// person.age = 23

// 4. Object.freeze() 冻结对象，不可以配置，也不可修改现有的属性
Object.freeze(person)
console.log(person.name)
person.name = 'why'  // 修改失败，严格模式下会报错
console.log(person.name)
