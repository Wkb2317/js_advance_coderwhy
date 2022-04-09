let arr = ['a', 'b', 'c']
let obj = {
  name: 'wkb',
  age: 23,
  height: 1.7
}

// 1. for...in
for (let i in arr) {
	// console.log(i + ':' + arr[i])
}

// 2. forEach
arr.forEach((item) => {
	// console.log(item)
})

// 3. some  要是有返回true，就停止迭代，如果没有return，就默认return false
arr.some(item => {
  // console.log(item)
  // return false 
  // return true
})

// 4. every 只要返回false，就停止迭代
arr.every(item => {
  // console.log(item)
  // return false
})

// 5. for ... of 遍历对象
for(let i of arr){
  console.log(i)
}

// 报错对象不可迭代，
// for(let i of obj){  
//   console.log(i)  
// }
