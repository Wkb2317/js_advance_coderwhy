function foo(){
    // console.log(arguments)

    // arguments不能使用map，foreach
    // arguments转成数组


    // 1. 使用slice复制
    let newArray = Array.prototype.slice.call(arguments)

    // 2. 间接
    let newArray1 = [].slice.call(arguments)

    // 3. 解构
    let newArray2 = [...arguments]

    // 4. Array.from()
    let newArray3 = Array.from(arguments)

    return newArray3
}

console.log(foo(12,13))

