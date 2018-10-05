const jsql = require('../index.js')
jsql.newJSON('{ "test": "hello" }')

jsql.setJSON(1, '{ "test": "hi" }')

console.log(jsql.getJSON(1))