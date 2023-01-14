const  express  = require("express");
const path = require("path");
const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);
app.use(userRoute);

app.listen(4444);