// ================================================================================================================
                                        // creating a connection
// ================================================================================================================

const mongoose =require('mongoose');

// ================================================================================================================
                                        // creating a connection
// ================================================================================================================

const listSchema = new mongoose.Schema({

    serial:
    {
        type:Number,
        required:true
    },
    
   
    identity:
    {
        type:Number,
        required: true
        
    },
  

    name:
    {
        type:String,
        required:true
    },
    

    years:
    {
        type:Number,
        required:true
    },

});

const brandproductModal = mongoose.model('brandstieupcollection', listSchema);

module.exports = brandproductModal;