// ================================================================================================================
                                        // creating a connection
// ================================================================================================================

const mongoose =require('mongoose');
const bcrypt =require('bcrypt');

// ================================================================================================================
                                        // creating a connection
// ================================================================================================================

const listSchema = new mongoose.Schema({

    name:
    {
        type:String,
        required: true
        
    },
    email:
    {
        type:String,
        required: true,
        unique:true
        
    },
    phonenumber:
    {
        type:Number,
        required: true
    },
    password:
    {
        type:String,
        required:true
    }

});

listSchema.pre("save",function(next){
    if(!this.isModified("password")) {
        return next();
    }
    this.password =bcrypt.hashSync(this.password,10);
    next();
});

listSchema.methods.comparePassword = function(plaintext , callback){
    return callback(null,bcrypt.compareSync(plaintext,this.password));
};

const userModel = mongoose.model('registrationdata', listSchema)

module.exports =userModel;