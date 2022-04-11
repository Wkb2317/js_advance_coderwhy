const info = {
  name: 'why',
  friend: {
    name: 'lilei',
    girFriend: {
      name: 'hanmeimei',
    },
  },
}

// 在不知道数据结构的情况下
if (info && info.friend && info.friend.girFriend) {
  console.log(info.friend.girFriend.name)
}

// 可选链
console.log(info.friend?.girFriend?.name)
