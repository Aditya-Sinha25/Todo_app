const express =require('express');
const app =express();
const port=2000;
const path =require('path');
const db =require('./config/mongoose');
const List =require('./models/user');


app.use(express.urlencoded());
app.use(express.static('./assets'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('home',{
        title:"TODO APP",
    });
});

//listen to the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and running on port:${port}`);
}); 