const express =require('express');
const app =express();
const port=2000;
const db =require('./config/mongoose');

//use express router
app.use('/',require('./routes/index'));
app.set('view engine','ejs');
app.set('views','./views');

//listen to the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and running on port:${port}`);
}); 