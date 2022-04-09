//  Object.prototype上的方法
// console.log(Object.prototype)

const obj = {
	name: 'wkb',
	age: 12
}
const arr = ['c', 'b', 'a']

// 1. hasOwnProperty()
// 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
// console.log(obj.hasOwnProperty('name'));  // true
// console.log(obj.hasOwnProperty('height'));  // false
// console.log(arr.hasOwnProperty('length')) // true

// 2.  isPrototypeOf()
//  用于测试一个对象的原型是否存在于另一个对象的原型链上。
// console.log(obj.__proto__.isPrototypeOf(Object));  // true
// console.log(Object.prototype.isPrototypeOf(obj)); // true

// 3. propertyIsEnumerable()
// 指定的属性是否可枚举
// 可枚举：(1).该属性是对象的自有属性
// (2).该对象是自定义的而不是内置的。
// console.log(arr)
// console.log(obj.propertyIsEnumerable('name'))
// console.log(arr.propertyIsEnumerable('a'))  // false  注意是属性  数组对应的属性是索引

// 4. toString()
//  返回该对象的字符串
console.log(obj.toString()) // [object Object]
console.log(arr.toString()) // c,b,a
// 通常用于类型检测
console.log(Object.prototype.toString.call(arr)) // [object Array]

// 5. valueOf()
//  返回值为该对象的原始值。
//  很多对象都重写了此方法,一般返回的都是对象的值
