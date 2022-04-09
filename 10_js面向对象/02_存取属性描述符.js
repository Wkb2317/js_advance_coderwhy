var obj = {
  name: 'wkb',
  _address: '北京市'  // js对象中没有私有属性，但是约定俗成的以_开头的被认为是对象的私有属性
}

Object.defineProperty(obj,"address",{
  enumerable:true,
  configurable:true,
  get: function() {
    console.log('调用了get');
    return this._address
  },
  set: function(val) {
    console.log('调用了set');
    this._address = val
  }
})

console.log(obj.address);
obj.address = '苏州'
console.log(obj);