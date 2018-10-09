const jsql = require('../index.js')

jsql.newJSON('{ "test": "hello" }')

jsql.setJSON('{ "test": "hello" }')

jsql.getJSON(function(err, data) {
    if (err) console.error(err)
    console.log(data.test)
})