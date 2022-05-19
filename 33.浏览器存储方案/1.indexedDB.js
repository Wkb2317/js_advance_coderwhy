const btns = document.querySelectorAll('button')

const dbRequest = indexedDB.open('wkb')

dbRequest.onerror = () => {
  console.log('error')
}

let db = null
dbRequest.onsuccess = event => {
  db = event.target.result
}

// 第一次打开或者版本发生更新
dbRequest.onupgradeneeded = evnet => {
  db = evnet.target.result

  // 创建存储对象
  db.createObjectStore('user', { keyPath: 'id' })
}

class User {
  constructor(id, name, age) {
    ;(this.id = id), (this.name = name), (this.age = age)
  }
}

const user = [
  new User(1, 'aaa', 10),
  new User(2, 'bbb', 20),
  new User(3, 'ccc', 30),
]

btns.forEach((item, index) => {
  item.onclick = () => {
    const transaction = db.transaction('user', 'readwrite')
    const store = transaction.objectStore('user')

    switch (index) {
      case 0:
        store.add(user)
        transaction.oncomplete = () => {
          console.log('添加成功')
        }
        break
      case 1:
        break
      case 2:
        break
      case 3:
        break
    }
  }
})
