var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('json.db'); // Don't change this.


db.run("CREATE TABLE jsondata (info TEXT)")

/*
Functions
*/

function add(data) {
  
}


db.serialize(function() {
  db.run("CREATE TABLE jsondata (info TEXT)")
  db.prepare("INSERT INTO jsondata VALUES (?)")
});
 
db.close();