/*

Node JSONSQLite
Created by Jack Merrill
Licensed under the Apache 2.0 License

*/


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('json.db'); // Don't change this.


db.run("CREATE TABLE IF NOT EXISTS jsondata (data TEXT)")

/*
Functions
*/

const setJSON = function setJSON(id, data) {
  var insert = db.prepare("UPDATE jsondata SET data = (?) WHERE rowid = (?)")
  insert.run(data, id)
  return true
}

exports.setJSON = setJSON

const newJSON = function newJSON(data) {
  var insert = db.prepare("INSERT INTO jsondata VALUES (?)")
  insert.run(data)
  return true
}

exports.newJSON = newJSON

const getJSON = function getJSON(callback) {
  db.get("SELECT data FROM jsondata", function(err, row) {
    if (err) throw err
    var data = row.data
    callback(null, JSON.parse(data))
  })
}

exports.getJSON = getJSON

