const  express  = require("express");

const app = express()

app.use('/', (req, res, next)=>{
    res.send('working');
});

app.listen(4444);