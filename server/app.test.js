const {app,server} = require("./app")

test('app launched',() => {
    expect(app.request.accepted)
})
test('server launched',() => {
    expect(server.address())
})