//  js数据类型检测
/**
 *  基础数据类型： string,boolean,number,obj,undefined,symbol
 * */
//  1. typeof
const Undefined = undefined
const Null = null
const String = 'wkb'
const Age = 23
const Sym = Symbol('test')
const bool = true
const obj = {
  name: 'wkb',
  Age
}
const array = [1, 2, 3]
const getUserId = function () {
  console.log('function');
}

// typeof只能判断基础数据类型，不能区别 null（空对象的引用） 与 其他引用类型
// typeof 可以识别 function
// console.log(typeof Undefined);
// console.log(typeof Null);
// console.log(typeof String);
// console.log(typeof Age);
// console.log(typeof Sym);
// console.log(typeof bool);
// console.log(typeof obj);
// console.log(typeof array);
// console.log(typeof getUserId);

// 2. instanceof  根据原型链判断 A instanceof B，检测B的原型是不是在A的原型链上
// console.log(array instanceof Array)
// console.log(Function instanceof Object)
// console.log(Array instanceof Object)
// console.log(getUserId instanceof Object)

// 简单实现instanceof
function instance_of (L,R){
  const rightProtoObj = R.prototype
  let leftProtoObj = L.prototype
  while(true){
    if(leftProtoObj === null){  // 原型链的尽头是null
      return false
    }
    if(leftProtoObj === rightProtoObj){  
      return true
    }
    leftProtoObj = leftProtoObj.__proto__  // 递归
  }
}
// console.log(instance_of(getUserId,Object));

// 3. === 可以区别null和undefined
// 引出显式类型转换和隐式类型转换
console.log(null === undefined)   // false
console.log(null == undefined);  // true

// 4. Object.prototype.toSting.call()
//  能很详细的检测数据类型，把数据类型转为字符串
console.log(Object.prototype);