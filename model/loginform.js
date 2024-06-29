// ================================================================================================================
                                        // creating a connection
// ================================================================================================================

const mongoose =require('mongoose');

// ================================================================================================================
                                        // creating a connection
// ================================================================================================================

const listSchema = new mongoose.Schema({

   
    email:
    {
        type:String,
        required: true
        
    },
   
    password:
    {
        type:String,
        required:true
    }

});

const loginModel = mongoose.model('loginformarea', listSchema)

module.exports =loginModel;