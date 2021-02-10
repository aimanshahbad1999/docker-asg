
var mysql = require('mysql');
var express = require('express');

var app = express();
var final_result = "";

app.get('/',function(req,res){
   


   var db_details = {
     host: 'mysql-con',
     port: '3306',
     user: 'aiman',
     password: 'password',
     database: 'mydb'
   };

   console.log('MySQL Connection config:');
   console.log(db_details);

   var con = mysql.createConnection(db_details);

   con.connect();

   var sql = "CREATE TABLE customer1 (name VARCHAR(255), address VARCHAR(255))";
   con.query(sql, function (err, result) {
     if (err){

      var sql = "DROP TABLE customer1";
      con.query(sql, function (err, result) {
      //   if (err) throw err;
      });

     }
     console.log("Table created");
   });

   var sql = "INSERT INTO customer1 (name, address) VALUES ('Cuelogic ', 'Pune')";
   con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

 
  con.query('SELECT * FROM customer1', function (error, results) {
     if (error) throw error;
     
     final_result = '';

     results.forEach(function(data){
      final_result += data.name + ' : '+data.address+`<br>`;
        console.log(data);
     });

     res.status(200).send(final_result);
   });
    
   con.end();
});


app.listen(5000);





