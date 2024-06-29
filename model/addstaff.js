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
    

    phone:
    {
        type:Number,
        required:true
    },

    address:
    {
        type:String,
        required:true
    },

    region:
    {
        type:String,
        required:true
    }
    

});

const viewstaffModal = mongoose.model('staffmemberscollection', listSchema);

module.exports =viewstaffModal;