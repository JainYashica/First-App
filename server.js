var express = require("express");
var app = express();

/*app.get('/',function(req,res){
	res.send("coming message from chutiya server")
}); */

app.use(express.static(__dirname + "/public"));

app.listen("3000");

console.log("chutiya server running ");
