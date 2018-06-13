
var mongoose =require('mongoose'),User = mongoose.model('User')


module.exports = {
    index : function(req,res){
        req.render('index');

    },
    displayQts : function(req,res){
        User.find({},function(err,quotes){
            if(err){
                console.log("Error in grabbing quotes")
                res.redirect('/')
            }
            else{
                quotes;
                res.render('quotes',{quotes:quotes});
            
            }
        });
    },
    removeAll : function(req,res){
        User.remove({},function(err){
            if(err){
                console.log("removing err")
                res.redirect('/');
            }
            else{
                console.log("remove complete");
                res.redirect('/');
            }
    
        });
    },

    newUser : function(req,res){
        console.log("POST DATA", req.body);
        var user = new User({name:req.body.name,quote:req.body.quote});
        user.save(function(err){
            if(err){
                console.log("flash Error")
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
    
            }
            else{
                console.log("user added");
                res.redirect('/');
            }
        })
    }

}