const List =require('../models/user');

module.exports.home=function(req,res){
    var users=List.find({},function(err,docs){
        if(err){
            console.log('Error showing data',err);
            return;
        }
        res.render('home',{
            title:'TODO APP',
            docs:List
        });
    });
}