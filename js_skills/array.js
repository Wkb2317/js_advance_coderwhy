let array = [1,4,2,10,9]

let keys = array.keys()  // 拿到数组的索引
let values = array.values() // 拿到数据的value
let entry = array.entries() // 索引 + value

for(let i of keys){
  console.log(i);
}

for(let i of values){
  console.log(i);
}

for(let i of entry){
  console.log(i);
}





