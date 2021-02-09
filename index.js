var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'aiman',
  password: 'password',
  database: 'mydb'
  

});


final_result="";

console.log(con)



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var sql = "INSERT INTO customers (name, address) VALUES ('Company 2', 'Highway 38')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    final_result=result;
    console.log("___________")
    console.log(final_result);
  });


  

});

var express = require('express');
var app = express();

app.get('/', function(req, res){

    responseStr="";
    final_result.forEach(function(data){
        responseStr += data.name + ' : ' +data.address+`<br>`;
        console.log(data);
     });
  res.send(responseStr);
});

app.listen(3000);



