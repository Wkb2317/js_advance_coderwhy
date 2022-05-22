function isObject(value) {
	const valueType = typeof value
	return value != null && (valueType === 'object' || valueType === 'function')
}


function deepClone(originValue,weakMap = new WeakMap()) {
	if(weakMap.has(originValue)){
		return weakMap.get(originValue)
	}
	let newValue
	const valueType = Object.prototype.toString.call(originValue)
	console.log(valueType)
	switch (valueType) {
		case "[object Object]":
			newValue = {}
			break
		case '[object Array]':
			newValue = []
			break
		case '[object Function]':
			 return originValue
		case '[object Symbol]':
			return Symbol(originValue.description)
		case '[object Set]':
			return new Set([...originValue])
		case '[object Map]':
			return new Map([...originValue])
	}

	// 判断传入的originValue是否是一个对象
	if (!isObject(originValue)) {
		return originValue
	}

	weakMap.set(originValue, newValue)

	for (let key in originValue) {
		// 如果是对象
		newValue[key] = deepClone(originValue[key], weakMap)
	}

	//对Symbol进行特殊处理
	const symbolKeys = Object.getOwnPropertySymbols(originValue)
	for (let skey of symbolKeys){
		newValue[skey] = deepClone(originValue[skey],weakMap)
	}

	return newValue
}

let s1 = Symbol('aaa')
let s2 = Symbol('bbb')

const obj = {
	name: 'wkb',
	age: 12,
	eat: function (){
		console.log('eat')
	},
	friends: {
		name: 'aaa',
		address: 'sz'
	},
	like: ['eating','codeing'],
	class: null,
	[s1]: 'hhh',
	s2: s2,
	set: new Set(['aaa','bbb']),
	map: new Map([
		['aaa','bbb']
	])
}

// 循环嵌套
obj.obj = obj

const newObj = deepClone(obj)

obj.friends.name = 'coder'
obj.friends.address = 'ah'
obj.class = ['name']
obj.eat = function (){
	console.log('aaa')
}

console.log(newObj)
console.log(newObj.s2 === obj.s2)

