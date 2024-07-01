const express = require('express');
const path = require('path');
const app = express();
const port=9865;


const session = require('express-session');
const cookies = require('cookie-parser');



const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookies());
app.use(
    session({
        key:"user_sid",
        secret:"somerandonstuff",
        resave:false ,
        saveUninitialised:false,
        cookie:{expires:6000000}
    })
)
// ===================auth file==============================
const router=require('./controller/auth');
// ===================auth file==============================
// const router = express.Router();


app.use('/', router);


// ===================importing database file==============================
const config=require('./db/config');
const { error } = require('console');
// ===================importing database file==============================


// Set the 'views' directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the 'views' directory
app.use(express.static('views'));


// Serve static files from the 'views' directory
app.use(express.static('upload'));

// can use this method too for making static
// app.use( express.static(path.join(__dirname,'/upload')))

// console.log(global);
app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
    // process.exit(1);
});

