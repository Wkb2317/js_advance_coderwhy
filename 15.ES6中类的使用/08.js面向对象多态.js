// 多态：当对不同的的数据类型执行同一个操作时，表现出不同的形态，则为多态
function calcArea(obj) {
  console.log(obj.getArea())
}

let person = {
  name: 'wkb',
  getArea() {
    return 100
  },
}

class Shap {
  getArea() {
    return 200
  }
}

let shap = new Shap()

calcArea(person)
calcArea(shap)
