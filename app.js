const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const { getPageNotFound } = require('./controllers/pageController');
const adminRoute = require('./routes/adminRoute');
const userRoute = require('./routes/userRoute');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname+'/views'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname+'/public')));

app.use('/admin', adminRoute);
app.use(userRoute);
app.use(getPageNotFound);

app.listen(4444, ()=>{
    console.log('app started');
});