//create a connection to our mysql workbench

var mysql=require('mysql'); 
var con=mysql.createConnection({
      host:'localhost',
      user:'root',
      pass:""
});
con.connect(function(err){
    if(err) throw err;
    console.log("CONNECTED........");
});