const List =require('../models/user');

module.exports.create =function(req,res){
    List.create({
        description:req.body.description,
        date:req.body.date,
        type:req.body.type
    },function(err,post){
        if(err){
            console.log('Error',err);
            return;
        }
        return res.redirect('back');
    });

}