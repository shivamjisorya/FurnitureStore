const express = require('express');


const router = express.Router();

const multer=require('multer');

var nodeMailer=require('nodemailer');
const session = require('express-session');
const cookies = require('cookie-parser');



// =======================================================================================
// ================================importing register model file===================================
const importmodel=require('../model/register');
// ================================importing register model file===================================
// ========85..===============================================================================


// =======================================================================================
// ================================importing contactus form model file===================================
const modelcontactus=require('../model/contactus');
// ================================importing contactus form model file===================================
// =======================================================================================


// =======================================================================================
// ================================importing add product model file===================================
const productadded=require('../model/addproduct');
// ================================importing add product model file===================================
// =======================================================================================



// =======================================================================================
// ================================importing add staff model file===================================
const addedstaff=require('../model/addstaff');
// ================================importing add staff model file===================================
// =======================================================================================


// =======================================================================================
// ================================importing loginform model file===================================
const brandsadded=require('../model/brandproduct');
// ================================importing loginform model file===================================
// =======================================================================================


router.get('/',async (req,res)=>{
    try{
      const productdata = await productadded.find({});
      res.render('index' , {productdata:productdata});
      console.log(productdata);
    }catch(err){
      console.log(err)
    }
  });


router.get('/aboutus', (req, res) => {
    res.render('aboutus');
});


router.get('/productdetail/:id',async (req,res)=>{
    try{
      const productdata = await productadded.findById(req.params.id);
      res.render('productdetail', {productdata:productdata});
      console.log(productdata);
    }catch(err){
      console.log(err)
    }
  });


router.get('/contactus', (req, res) => {
    res.render('contactus');
});


router.get('/furniture-types', (req, res) => {
    res.render('furniture-types');
});


router.get('/collections', (req, res) => {
    res.render('collections');
});

router.get('/registration-form', (req, res) => {
    res.render('registration-form');
});


router.get('/login-form', (req, res) => {
    res.render('login-form');
});


router.get('/userprofile' , async (req,res) => {
    if(req.session.user && req.cookies.user_sid){
        var user = await importmodel.findOne(req.session.user)
        res.render('user-profile' , {user:user})
    }else{
        res.redirect('/login-form')  
      }
})


// =======================================================
// =================admin-panel===========================
// =======================================================
router.get('/dashboardindex',async (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/index');

    } else{
        res.redirect("/login-form");
    }
});


router.get('/dashboardheader', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/header');

    } else{
        res.redirect("/login-form");
    }
});

router.get('/add-product', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/add-product');

    } else{
        res.redirect("/login-form");
    }
});

router.get('/cart-table', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/cart-table');

    } else{
        res.redirect("/login-form");
    }
});

router.get('/item-table', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/item-table');  

    } else{
        res.redirect("/login-form");
    }
});

router.get('/category', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/category');

    } else{
        res.redirect("/login-form");
    }
});

router.get('/add-staff', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/add-staff');

    } else{
        res.redirect("/login-form");
    }

});


router.get('/brands-form', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/brands-form');

    } else{
        res.redirect("/login-form");
    }
});


router.get('/edit-register', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/edit-register');

    } else{
        res.redirect("/login-form");
    }
});


router.get('/edit-login', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/edit-login');

    } else{
        res.redirect("/login-form");
    }
});

router.get('/edit-contact', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/edit-contact');

    } else{
        res.redirect("/login-form");
    }
});

router.get('/edit-product', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/edit-product');

    } else{
        res.redirect("/login-form");
    }
});

router.get('/edit-staff', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/edit-staff');

    } else{
        res.redirect("/login-form");
    }
});

router.get('/edit-brand', (req, res) => {
    var user = req.session.user;
    if(req.session.user && req.cookies.user_sid && user.email=="admin@gmail.com") {
        res.render('./admin-panel/edit-brand');

    } else{
        res.redirect("/login-form");
    }
});

// =======================================================
// =================admin-panel===========================
// =======================================================



// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// =====================================Registration all api===========================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================

// ========================================posting registration form data================
router.post('/register',(req,res)=>{
    var user= new importmodel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phonenumber:req.body.phonenumber
    });
    user.save().then(()=>{
        console.log("saved data");
        res.redirect('/registration-form');

    })
    .catch((err)=>{
        console.log(err);
        res.redirect('dashboardindex');
        
    })
})
// ========================================posting registration form data================

// ========================================getting registration form data================
router.get('/view-registration',async (req,res)=>{
  try{
    const regdata = await importmodel.find({});
    res.render('./admin-panel/view-registration' , {regdata:regdata});
    console.log(regdata);
  }catch(err){
    console.log(err)
  }
});
// ========================================getting registration form data================

//============================= delete api  for registration===========================

router.get("/delete1/:id", async (req,res) => {

    try{
        const deleteregister = await importmodel.findByIdAndDelete(req.params.id);

        return res.redirect("/view-registration");
    }
    catch(err) {
        console.log(err);
    }
    
});

//============================= delete api  for registration===========================


//=============================get edit api  for registration==========================

router.get("/edit1/:id", async (req,res) => {

    try{
        const editregister = await importmodel.findById(req.params.id);

        console.log(editregister);

        res.render('./admin-panel/edit-register' , {editregister:editregister})
    }
    catch(err) {
        console.log(err);
    }
    
});
//=============================get edit api  for registration===========================


//=============================post edit api  for registration==========================

router.post("/edit1/:id", async (req,res) => {
const itemId = req.params.id;
const updateddata =req.body;
    try{
        const editeditem = await importmodel.findByIdAndUpdate(itemId , updateddata , {new:true});

        if(!editeditem){
            return res.status(404).json({message:"item not found"})
        }
        res.redirect('../view-registeration');
        // res.json(editeditem);

        // console.log(editregister);

    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'});
    }
    
});
//=============================post edit api  for registration==========================




// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// =====================================login all api==================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================



// ========================================posting login form data===============
router.post('/loginform', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    try {
        var user = await importmodel.findOne({ email: email }).exec();
        
        if (!user) {
            console.log("no user exists");
            return res.redirect('/login-form');
        }

        // Compare password
        user.comparePassword(password, (error, match) => {
            if (error) {
                console.error("Error comparing passwords:", error);
                return res.redirect('/login-form');
            }
            if (!match) {
            console.log("wrong password");
                return res.redirect('/login-form');
            }

            req.session.user = user;

            if (email === "admin@gmail.com") {
                return res.redirect('/dashboardindex');
            } else {
                return res.redirect("/");
            }
        });

    } catch (error) {
        console.error("Error logging in:", error);
        return res.redirect('/login-form');
    }
});

  

// ========================================posting login form data================

// ========================================getting login form data in login-table================
router.get('/login-table',async (req,res)=>{
    try{
      const loginformdata = await importmodel.find({});
      res.render('./admin-panel/login-table' , {logindata:loginformdata});
      console.log(loginformdata);
    }catch(err){
      console.log(err)
    }
  });
// ========================================getting login form data in login-table================


// ===============================logout=====================================

router.get("/logout" , (req,res) => {
    if(req.session.user && req.cookies.user_sid) {
        req.clearCookie("user_sid");
        res.redirect("/");
    } else{
        res.redirect("/login-form");
    }
});

// ==============================logout==========================================

//============================= delete api  for login table===========================

router.get("/delete2/:id", async (req,res) => {

    try{
        const deletelogin = await importmodel.findByIdAndDelete(req.params.id);

        return res.redirect("/login-table");
    }
    catch(err) {
        console.log(err);
    }
    
});
//============================= delete api  for login table===========================


//=============================get edit api  for login table===========================

router.get("/edit2/:id", async (req,res) => {

    try{
        const editlogin = await importmodel.findById(req.params.id);

        console.log(editlogin);

        res.render('./admin-panel/edit-login' , {editlogin:editlogin})
    }
    catch(err) {
        console.log(err);
    }
    
});
//=============================get edit api  for login table===========================


//=============================post edit api  for login table===========================

router.post("/edit2/:id", async (req,res) => {
const itemId = req.params.id;
const updateddata =req.body;
    try{
        const editeditem = await importmodel.findByIdAndUpdate(itemId , updateddata , {new:true});

        if(!editeditem){
            return res.status(404).json({message:"item not found"})
        }
    //  const viewpath = "../admin-panel/login-table";
        res.redirect('../login-table');
        // res.json(editeditem);

        // console.log(editregister);

    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'});
    }
    
});
//=============================post edit api  for login table===========================



// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// =====================================contact us all api===========================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================


// ========================================posting contactus form data================
router.post('/contactus',(req,res)=>{
    var contactusvar= new modelcontactus({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
        
    });
    
    contactusvar.save().then(()=>{
        console.log("saved data");
        res.redirect('/contactus');

    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/dashboardindex');

    })
})
// ========================================posting contactus form data================

// ========================================getting contactus form data================
router.get('/view-contact',async (req,res)=>{
    try{
      const contactusdata = await modelcontactus.find({});
      res.render('./admin-panel/view-contact' , {contactdata:contactusdata});
      console.log(contactusdata);
    }catch(err){
      console.log(err)
    }
  });
  // ========================================getting contactus form data================
  
//============================= delete api  for view contact table===========================

router.get("/delete3/:id", async (req,res) => {

    try{
        const deletecontactus = await modelcontactus.findByIdAndDelete(req.params.id);

        return res.redirect("/view-contact");
    }
    catch(err) {
        console.log(err);
    }
    
});
//============================= delete api  for view contact table===========================
 

//=============================get edit api  for view contact table===========================

router.get("/edit3/:id", async (req,res) => {

    try{
        const editcontact = await modelcontactus.findById(req.params.id);

        console.log(editcontact);

        res.render('./admin-panel/edit-contact' , {editcontact:editcontact})
    }
    catch(err) {
        console.log(err);
    }
    
});
//=============================get edit api  for view contact table===========================


//=============================post edit api  for view contact table===========================

router.post("/edit3/:id", async (req,res) => {
const itemId = req.params.id;
const updateddata =req.body;
    try{
        const editeditem = await modelcontactus.findByIdAndUpdate(itemId , updateddata , {new:true});

        if(!editeditem){
            return res.status(404).json({message:"item not found"})
        }
    //  const viewpath = "../admin-panel/login-table";
        res.redirect('../view-contact');
        // res.json(editeditem);

        // console.log(editregister);

    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'});
    }
    
});
//=============================post edit api  for view contact table===========================



// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// =====================================add product all api ===========================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================


// =====================================uploading file=================================
const storage=multer.diskStorage({
    destination: function(req,file ,cb) {
        cb(null, './upload');
    },
    filename: function (req,file,  cb) {
        cb(null,file.originalname);
    }
});

const fileFilter = (req,file,cb) => {
    const allowedFileTypes =['image/jpeg', 'image/png' , 'image/webp'];
    if(allowedFileTypes.includes(file.mimetype))  {
        cb(null,true);
    }else {
        cb(null,false);
    }
}
const maxsize = 1024*1024;
let upload= multer({storage , fileFilter , limits: {fileSize:maxsize}});



// ========================================posting add product form data================
router.post('/addproduct',upload.single('filename'),(req,res)=>{
    var productaddition= new productadded({
        filename:req.file.filename,
        productname:req.body.productname,
        producttype:req.body.producttype,
        productprice:req.body.productprice,
        description:req.body.description,
        highlights:req.body.highlights
        
    });
    
    productaddition.save().then(()=>{
        console.log("saved data");
        res.redirect('/add-product');

    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/dashboardindex');

    })
})
// ========================================posting add product form data================

// ========================================getting add-product form data================
router.get('/view-product',async (req,res)=>{
    try{
      const productdata = await productadded.find({});
      res.render('./admin-panel/view-product' , {productdata:productdata});
      console.log(productdata);
    }catch(err){
      console.log(err)
    }
  });
  // ========================================getting add-product form data================
  
//============================= delete api  for view product table===========================

router.get("/delete4/:id", async (req,res) => {

    try{
        const deleteproduct = await productadded.findByIdAndDelete(req.params.id);

        return res.redirect("/view-product");
    }
    catch(err) {
        console.log(err);
    }
    
});
//============================= delete api  for view product table===========================


//=============================get edit api  for view product table===========================

router.get("/edit4/:id", async (req,res) => {

    try{
        const editproduct = await productadded.findById(req.params.id);

        console.log(editproduct);

        res.render('./admin-panel/edit-product' , {editproduct:editproduct})
    }
    catch(err) {
        console.log(err);
    }
    
});
//=============================get edit api  for view product table===========================


//=============================post edit api  for view product table===========================

router.post("/edit4/:id", async (req,res) => {
const itemId = req.params.id;
const updateddata =req.body;
    try{
        const editeditem = await productadded.findByIdAndUpdate(itemId , updateddata , {new:true});

        if(!editeditem){
            return res.status(404).json({message:"item not found"})
        }
    //  const viewpath = "../admin-panel/login-table";
        res.redirect('../view-product');
        // res.json(editeditem);

        // console.log(editregister);

    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'});
    }
    
});
//=============================post edit api  for view product table===========================


  
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================staff members all api===========================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================



// ========================================posting staff members form data================
router.post('/addstaff',(req,res)=>{
    var staff= new addedstaff({
        serial:req.body.serial,
        identity:req.body.identity,
        name:req.body.name,
        phone:req.body.phone,
        address:req.body.address,
        region:req.body.region

    });
    staff.save().then(()=>{
        console.log("saved data");
        // res.redirect('/login');
        return res.redirect("/add-staff");

    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/dashboardindex');
    })
})
// ========================================posting staff members form data================

// ========================================getting staff members form data================
router.get('/staff-table',async (req,res)=>{
    try{
      const staffdata = await addedstaff.find({});
      res.render('./admin-panel/staff-table' , {stafftable:staffdata});
      console.log(staffdata);
    }catch(err){
      console.log(err)
    }
  });
// ========================================getting staff members form data================  
  
//============================= delete api  for staff members table===========================

router.get("/delete5/:id", async (req,res) => {

    try{
        const deletestaff = await addedstaff.findByIdAndDelete(req.params.id);

        return res.redirect("/staff-table");
    }
    catch(err) {
        console.log(err);
    }
    
});
//============================= delete api  for staff members table===========================


//=============================get edit api  for staff table===========================

router.get("/edit5/:id", async (req,res) => {

    try{
        const editstaff = await addedstaff.findById(req.params.id);

        console.log(editstaff);

        res.render('./admin-panel/edit-staff' , {editstaff:editstaff})
    }
    catch(err) {
        console.log(err);
    }
    
});
//=============================get edit api  for staff table===========================


//=============================post edit api  for staff table===========================

router.post("/edit5/:id", async (req,res) => {
const itemId = req.params.id;
const updateddata =req.body;
    try{
        const editeditem = await addedstaff.findByIdAndUpdate(itemId , updateddata , {new:true});

        if(!editeditem){
            return res.status(404).json({message:"item not found"})
        }

        res.redirect('../staff-table');
      
    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'});
    }
    
});
//=============================post edit api  for staff table===========================


// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// =====================================brand products all api=========================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================


  
// ========================================posting brand products form data================
router.post('/brandproduct',(req,res)=>{
    var brands= new brandsadded({
        serial:req.body.serial,
        identity:req.body.identity,
        name:req.body.name,
        years:req.body.years,
       
    });
    brands.save().then(()=>{
        console.log("saved data");
        return res.redirect("/brands-form");


    })
  
    .catch((err)=>{
        console.log(err);
        res.redirect('/dashboardindex');
    })
})
// ========================================posting brand products form data================

// ========================================getting brand products form data================
router.get('/brand-table',async (req,res)=>{
    try{
      const brandsdata = await brandsadded.find({});
      res.render('./admin-panel/brand-table' , {brandstable:brandsdata});
      console.log(brandsdata);
    }catch(err){
      console.log(err)
    }
  });
// ========================================getting brand products form data================
  
//============================= delete api  for brand table===========================

router.get("/delete6/:id", async (req,res) => {

    try{
        const deletebrand = await brandsadded.findByIdAndDelete(req.params.id);

        return res.redirect("/brand-table");
    }
    catch(err) {
        console.log(err);
    }
    
});
//============================= delete api  for brand table===========================

//=============================get edit api  for brand table===========================

router.get("/edit6/:id", async (req,res) => {

    try{
        const editbrand = await brandsadded.findById(req.params.id);

        console.log(editbrand);

        res.render('./admin-panel/edit-brand' , {editbrand:editbrand})
    }
    catch(err) {
        console.log(err);
    }
    
});
//=============================get edit api  for brand table===========================


//=============================post edit api  for brand table===========================

router.post("/edit6/:id", async (req,res) => {
const itemId = req.params.id;
const updateddata =req.body;
    try{
        const editeditem = await brandsadded.findByIdAndUpdate(itemId , updateddata , {new:true});

        if(!editeditem){
            return res.status(404).json({message:"item not found"})
        }

        res.redirect('../brand-table');
      
    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'});
    }
    
});
//=============================post edit api  for brand table===========================


// ======================================================================================

// ======================================================================================


// ======================================================================================

// ======================================================================================

  
module.exports=router;