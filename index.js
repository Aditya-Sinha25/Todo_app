//importing libraries
const express =require('express');
const app =express();
const port=2000;
const path =require('path');
const db =require('./config/mongoose');
const List =require('./models/user');
const homeController =require('./controllers/home');
const listContoroller =require('./controllers/list');

//static files
app.use(express.urlencoded());
app.use(express.static('./assets'));


//seting up the view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



//creating the routes
app.get('/',homeController.home);

app.post('/create',listContoroller.create);
app.get('/destroy/:id',listContoroller.destroy);


//listen to the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and running on port:${port}`);
}); 