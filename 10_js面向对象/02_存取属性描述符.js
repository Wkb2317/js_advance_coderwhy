/*
 * @Author: Wkb2317 2576267399@qq.com
 * @Date: 2022-04-09 19:16:35
 * @LastEditors: Wkb2317 2576267399@qq.com
 * @LastEditTime: 2022-05-07 21:38:27
 * @FilePath: \js_advance_coderwhy\10_js面向对象\02_存取属性描述符.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var obj = {
  name: 'wkb',
  _address: '北京市', // js对象中没有私有属性，但是约定俗成的以_开头的被认为是对象的私有属性
}

Object.defineProperty(obj, 'address', {
  enumerable: true,
  configurable: true,
  get: function () {
    console.log('调用了get')
    return this._address
  },
  set: function (val) {
    console.log('调用了set')
    this._address = val
  },
})

console.log(obj.address)
obj.address = '苏州'
console.log(obj)
