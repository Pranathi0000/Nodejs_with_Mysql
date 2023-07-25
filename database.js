//creating a database in the mysql named as mydb

var mysql=require('mysql'); 
var con=mysql.createConnection({
      host:'localhost',
      user:'root',
      pass:"Mysql@1234"
});
con.connect(function(err){
    if(err) throw err;
    console.log("CONNECTED........");
    //create database myDB
    con.query("CREATE DATABASE mydb;",function(err,result)
    {
        if(err) throw err;
        console.log("DB created");
    });
});