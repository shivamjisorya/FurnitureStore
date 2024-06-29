// ================================================================================================================
                                        // creating or using database
// ================================================================================================================

const mongoose =require('mongoose');

// var conn=mongoose.connect("mongodb+srv://jisoryas26:shivam1709@cluster0.zvrkaiw.mongodb.net/school?retryWrites=true&w=majority",
var conn= mongoose.connect("mongodb://localhost:27017/shivamjisorya",
{
    useNewUrlParser:true,
    useUnifiedTopology:true})
    .then(()=>console.log("connection scuccessfully"))
    .catch((err)=>console.log(err));
    
// ================================================================================================================
                                        // creating or using database
// ================================================================================================================



  
// ================================================================================================================
                                    // creating schema for the input
// ================================================================================================================



    // // schema
    // //  a mongoose schema defines the structure of the document
    // // default values, validator , etc

    const listSchema = new mongoose.Schema({

        name:
        {
            type:String,
            required: true
        },
        email:
        {
            type:String,
            required: true
        },

        // active:boolean ,

        // date:
        // {
        //     type:date,
        //     default:Date.nows
        // }
    })

     
// ================================================================================================================
                                    // creating schema for the input
// ================================================================================================================

    // // a mongoose model is a wapper on the mongoose schema 
    // // mongoose model provides an interface to the database for creating , querying , updating 

    // // collection creation

    // // imp when we pass const variable its call class
    // // so it should be start with caps

    
// ================================================================================================================
                                    // creating schema for the input
// ================================================================================================================




// ================================================================================================================
                                // creating document by schema with collection and data
// ================================================================================================================


    const playlist = new mongoose.model("playlist" ,listSchema)
    // playlist parameter is a name of collection name and it only define singular form

 
    // // create document or insert
    // const createDocument = async()=> {

    //     try{

    //         const productlist1 =new playlist({
    //             name:'shivam',
    //             email:'jisoryas26@gmailcom'
    //         })
    //         // first method of save data 
    //         // productlist1.save()

    //         const productlist2 =new playlist({
    //             name:'vikas',
    //             email:'vikasrawat@gmailcom'
    //         })

    //         const productlist3 =new playlist({
    //             name:'sumit',
    //             email:'sumitarya@gmailcom'
    //         })
    //         const result = await playlist.insertMany([productlist1,productlist2,productlist3,])
    //         console.log(result);

    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }

    // createDocument();

    
// ================================================================================================================
                                // creating document by schema with collection and data
// ================================================================================================================

const getDocument = async()=>{
    const result=await playlist.find();
    console.log(result);
}
 getDocument();

 const updateDocument = async () => {
    try {
        const condition = { name: 'shivaji', email: 'shivaji@gmail.com' };
        const update = { $set: { name: 'prabhu', email: 'prabhusunder@gmail.com' } };
        const result = await playlist.updateOne(condition, update);
        
        console.log(result);
        const updatedDocument = await playlist.findOne({ name: 'prabhu',email:'prabhusunder@gmail.com' });
        console.log(updatedDocument);
      } catch (error) {
        console.error(error);
      }
    };
    updateDocument();

    
    // const deleteDocument = async () => {
    //     try {    
    //         const condition = { name: 'shivaji', email: 'shivaji@gmail.com' };
    //         const result = await playlist.deleteOne(condition);
    //         console.log(result);
    //         const remainingDocuments = await playlist.find();
    //         console.log(remainingDocuments);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //     deleteDocument();