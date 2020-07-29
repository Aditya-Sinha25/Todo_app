const List =require('../models/user');

//creating the create controller
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


//creating the destroy controller
module.exports.destroy =function(req,res){
    List.findById(req.params.id,function(err,list){
        list.remove();
        return res.redirect('back');
    });
}