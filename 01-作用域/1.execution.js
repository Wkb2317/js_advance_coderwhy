var name = 'wkb'

console.log(num1);

var num1 = 20;
var num2 = 30;

var res = num1 + num2

console.log(res);

/* 
 *  1. 代码解析，v8引擎会帮我们创建一个全局对象（globalObject）
 *  globalObject={
 *    String: Object;
 *    Array:  Object;
 *    name: undefined;
 *    num1 : undefined;
 *    num2 : undefined;
 *  }
 *  2. 运行代码
 *      2.1 v8为了执行代码，会创建一个执行上下文栈（函数调用栈）
 *      2.2 因为我们执行的是全局代码，为了全局代码能够正常的运行，需要创建全局执行上下文（全局代码需要执行被执行时才会创建）
 *          其中就包括全局对象，但只是会将定义的全局变量和函数放到globalObject中，但不会赋值。这就是变量的作用域提升。在代码的执行中，
 *          对变量的赋值。或者执行其他函数。
 */   