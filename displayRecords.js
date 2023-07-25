//display all the students details using order by name function

var sql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'Mysql@1234',
    database:'mydb'
});

con.connect(function(err)
{
    var sql='select * from student order by name asc;';

    con.query(sql,function(err,result)
    {
        if(err) throw err;
        console.log(result);
        console.log("Displaing the records in ascending order");
    });
});