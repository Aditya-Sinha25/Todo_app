//creating the home controller

const List =require('../models/user');


module.exports.home=function(req,res){
    List.find(function(err,list){
        return res.render('home',{
            title:'TODO APP',
            doc:list
        });
    });
}