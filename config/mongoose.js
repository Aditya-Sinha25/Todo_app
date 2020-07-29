//Setting up the mongoose connection

const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/todo_app');

const db =mongoose.connection;
db.on('error',console.error.bind(console,'Error in connecting to the MongoDB'));

db.once('open',function(){
    console.log('Connected to the database:: MongoDB');
});

module.exports =db;