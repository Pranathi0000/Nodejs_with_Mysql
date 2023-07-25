//Inserting data into student table

var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'Mysql@1234',
    database:'mydb'
});

con.connect(function(err)
{
    var sql='insert into student values("seetha","Mithula");';

    con.query(function(err,result)
    {
        if(err) throw err;
        console.log("Record inserted");
    });
});