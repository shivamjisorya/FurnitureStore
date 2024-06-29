// ================================================================================================================
                                        // creating a connection
// ================================================================================================================

const mongoose =require('mongoose');

// ================================================================================================================
                                        // creating a connection
// ================================================================================================================

const listSchema = new mongoose.Schema({

    name:
    {
        type:String,
        required:true
    },
    
   
    email:
    {
        type:String,
        required: true
        
    },
  

    subject:
    {
        type:String,
        required:true
    },
    

    message:
    {
        type:String,
        required:true
    },
    

});

const contactusModal = mongoose.model('Contactuscollection', listSchema);

module.exports =contactusModal;