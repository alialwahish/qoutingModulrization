var express = require("express");

var app=express();
const flash = require("express-flash");
app.use(flash());
var session = require('express-session');
var mongoose = require('mongoose');

app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}))


mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name:{type: String, required:true, minlength:3},
    quote:{type:String,required:true,minlength:3}
},{timestamps: true})

mongoose.model("User",UserSchema);
var User = mongoose.model('User');





var bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

var path= require("path");

app.use(express.static(path.join(__dirname,"/static")));

app.set('views',path.join(__dirname,'/views'));

app.set('view engine','ejs');

require('./routes/routes.js')(app)



app.listen(5000,function(){
    console.log("listining on port 5000");
})