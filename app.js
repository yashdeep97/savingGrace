
var mongoose = require("mongoose");
var bodyParser=require("body-parser");

var express = require("express");
var app = express;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
mongoose.connect("mongodb://test:test@ds149268.mlab.com:49268/to-do_app");
//for now i am listening to 3000 but
app.listen(3000);
var todoSchema = new mongoose.Schema({
  ID:String;
  name:String;
  date:DATE;
});


var db  = require(./insert.js);
//db.CreateUser(ID,name,function(){
//  db.setGrace(date);
}

app.get("/:id",urlencodedParser,function(req,res){
  // id should be of format 2014343,...
  var user = req.params.id ;
  db.CreateUser(user,somenamefromdatabase);
  if err
  {
    res.send("error");
  }
});
app.get("/grace",function(req,res,next){
  var grace= req.body;
  db.setGrace(user,grace);



})
