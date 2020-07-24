const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    type:{
        type:String
    }
},{
    timestamps:true
});

const List =mongoose.model('List',userSchema);
module.exports =List;