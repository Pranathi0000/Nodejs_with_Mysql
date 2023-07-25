//displaying a student record where name is RAM

var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'Mysql@1234',
    database:'mydb'
});

con.connect(function(err)
{
    var sql='select * from student where name="Ram";';

    con.query(sql,function(err,result)
    {
        if(err) throw err;
        console.log(result);
        console.log("Record displayed...");
    })
})