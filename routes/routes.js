var mongoose =require('mongoose'),User = mongoose.model('User')

var quotes = require('../controls/quotes.js');

module.exports= function(app){

app.post('/users',function(req,res){
   quotes.newUser(req,res);

})
app.get('/',function(req,res){
  quotes.index(res,req)


})



app.get('/remove',function(req,res){
   quotes.removeAll(req,res);
})

app.get('/quote',function(req,res){
    quotes.displayQts(req,res);
})

}
