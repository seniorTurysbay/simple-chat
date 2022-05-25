class Users {
  constructor() {
    this.users = []
  }

  add(user) {
    console.log('user',user)
    this.users.push(user)
  }

  get(id) {
    console.log('id',id)
    return this.users.find(user => user.id === id)
  }

  remove(id) {
    console.log('id',id)
    const user = this.get(id)
    console.log('user1',user)
    if (user) {
      this.users = this.users.filter(user => user.id !== id)
    }
    console.log('user2',user)
    return user
  }

  getByRoom(room) {
    console.log('room',room)
    return this.users.filter(user => user.room === room)
  }
}

module.exports = function() {
  return new Users()
}
