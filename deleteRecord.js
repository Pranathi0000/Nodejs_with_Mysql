//delete a student details from table

var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'Mysql@1234',
    database:'mydb'
});

con.connect(function(err)
{
    var sql='delete from student where name="Ram";';

    con.query(sql,function(err,result)
    {
        if(err) throw err;
        console.log("Record deleted");
    })
});