var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('json.db'); // Don't change this.


db.run("CREATE TABLE IF NOT EXISTS jsondata (data TEXT)")

/*
Functions
*/

const setJSON = function setJSON(id,data) {
  var insert = db.prepare("UPDATE jsondata SET data = (?) WHERE rowid = (?)")
  insert.run(data, id)
  return console.log("Success! Set JSON data to "+data+" in row "+id)
}

exports.setJSON = setJSON

const newJSON = function newJSON(data) {
  var insert = db.prepare("INSERT INTO jsondata VALUES (?)")
  insert.run(data)
  return console.log("Success! Set NEW JSON data to "+data)
}

exports.newJSON = newJSON

const getJSON = function getJSON() {
  db.get("SELECT data FROM jsondata", function(err, row) {
    if (err) throw err
    return row
  })
}

exports.getJSON = getJSON

