const userFunc = require('./users')
const User = userFunc()
const newUser = User
const {app} = require('./app')

test('adds user',() => {
    expect(newUser.add({name:'Guldariya',room:'NWPU'}))
})
test('adds user',() => {
    expect(newUser.add({name:'Dinmukhambet',room:'NPU'}))
})
test('adds user',() => {
    expect(newUser.add({name:'Daulet',room:'xigongda'}))
})

test('get by roomById',() => {
    expect(newUser.getByRoom('NWPU'))
})

test('get by roomById',() => {
    expect(newUser.getByRoom('NPU'))
})

test('get by roomById',() => {
    expect(newUser.getByRoom('xigongda'))
})

test('get user by id',() => {
    expect(newUser.get('12'))
})
test('get user by id',() => {
    expect(newUser.get('14'))
})
test('get user by id',() => {
    expect(newUser.get('15'))
})

test('remove user by id',() => {
    expect(newUser.remove('12'))
})
test('remove user by id',() => {
    expect(newUser.remove('14'))
})
test('remove user by id',() => {
    expect(newUser.remove('15'))
})
