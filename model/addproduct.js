// ================================================================================================================
                                        // creating a connection
// ================================================================================================================

const mongoose =require('mongoose');

// ================================================================================================================
                                        // creating a connection
// ================================================================================================================

const listSchema = new mongoose.Schema({

    filename:
    {
        type:String,
        required:true
    },
    

    productname:
    {
        type:String,
        required:true
    },
    
   
    producttype:
    {
        type:String,
        required:true
        
    },
  

    productprice:
    {
        type:Number,
        required:true
    },
    

    description:
    {
        type:String,
        required:true
    },
    
    highlights:
    {
        type:String,
        required:true
    }
    

});

const addproductModal = mongoose.model('addedproductcollection', listSchema);

module.exports =addproductModal;