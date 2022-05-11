const iteratorObj = {
  names: ['aaa', 'bbb', 'ccc'],
  [Symbol.iterator]: function () {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      },
    }
  },
}

// iteratorObj  就是一个可迭代对象
