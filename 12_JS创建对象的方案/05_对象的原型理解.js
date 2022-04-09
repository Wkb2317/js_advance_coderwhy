// 每个对象中都有一个[[prototype]]，这个属性称之为对象的原型（隐式原型）
let obj = { name: 'wkb' }
console.log(obj.__proto__)

// ES5 时候提供Object.getPrototypeOf
// console.log(Object.getPrototypeOf(obj))

// 函数的原型，通过prototype可以访问到原型对象
function foo () {

}

console.log(foo.prototype)