const express = require('express');

const app=express();


// // base url file comes on localhost:2890
// app.get('/' , function(req,res)
// {
//     res.send("login page 3543")
// }
// )

// router url about us file comes on localhost:2890/aboutus
app.get('/login' , function(req,res){

    res.send("about us page")
})


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//                  post
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// app.post('/login',function(req,res)
// {
//     res.send("login page out")
// })

// app.delete('/login',function(req,res){
//     res.send("deleted page ")

// })



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//                  router
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


const router = express.Router();

app.use('/',router);

router.get('/' , function(req,res){

    // res.send("maker of this page");
    res.sendFile(__dirname+"/samplecodermantra.html");
})


app.listen(2890);