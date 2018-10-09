
# JSONSQLite

JSONSQLite lets you store JSON data in a SQLite database.

# Getting Started

## Installation
Using npm:
```shell
  npm install --save jsonsqlite
```
## Loading in Node.js
```js
  const jsql = require('jsonsqlite')
```
# Example Script
```js
  const jsql = require('jsonsqlite')
  jsql.newJSON('{ "test": "hello" }')

  jsql.setJSON(1, '{ "test": "hi" }')

  jsql.getJSON(function(err, data) {
      if (err) console.error(err)
      console.log(data.test)
  })
```

This script can be tested in test/maintest.js. It should return this:
```
  Success! Set NEW JSON data to { "test": "hello" }
  Success! Set JSON data to { "test": "hi" } in row 1
  undefined: { "test": "hi" }
  hi
```
# Why JSONSQLite?
If you are good with JSON, but not with SQLite, this is for you!

# Issues or Questions
If you have an issue or question about this module, make a new issue [here](https://github.com/yoshifan509/issues).

# Current Known Bugs
There are some currently known bugs, they are as followed:

 - No table `jsondata` on first run

They will be fixed alongside development.
