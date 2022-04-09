/*
*   1. 箭头函数中没有arguments，箭头函数中的arguments是找父级上下文
*   2. node环境中的arguments存在，浏览器中的全局arguments不存在
*   3.
* */

function foo(){
    return () => {
        console.log(arguments)
    }
}

foo(1234,456)()