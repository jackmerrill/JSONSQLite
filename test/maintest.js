const jsql = require('../index.js')
jsql.newJSON('{ "test": "hello" }')

jsql.setJSON(1, '{ "test": "hi" }')

jsql.getJSON(function(err, data) {
    if (err) console.error(err)
    console.log(data.test)
})