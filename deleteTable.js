//delete table student from the mydb database

var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'Mysql@1234',
    database:'mydb'
});

con.connect(function(err)
{
    var sql='drop table student;';

    con.query(sql,function(err,result)
    {
        if(err) throw err;
        console.log("Table deleted");
    })
})