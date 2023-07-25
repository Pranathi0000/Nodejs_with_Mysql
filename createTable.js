//creating a table student in mydb database

var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"Mysql@1234",
    database:"mydb"
});
con.connect(function(err)
{
    var sql="create table student(name VARCHAR(10), address VARCHAR(20));";
    con.query(sql,function(err,result)
    {
        if(err) throw err;
        console.log("Table Created");
    });
});
