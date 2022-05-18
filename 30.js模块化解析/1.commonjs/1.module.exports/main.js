const wkb = require('./wkb')

console.log(wkb)
wkb.name = 'coder'

// commonjs知识点总结
/**
 * 1. 用module.exports和exports导出
 *    其中原理 module.exports = {}; exports = module.exports。exports已经不常使用
 *
 * 2. 每次用require引入时都会执行一下引入的文件。如果重复引用，则只会执行一次，并且会缓存该模块。
 *     实现原理的module上有个isload属性。
 *
 * 3. require引入是根据图的深度优先遍历
 *
 * 4. require加载是运行时的，会阻塞后面的代码
 */
