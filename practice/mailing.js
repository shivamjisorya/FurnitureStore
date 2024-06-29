var nodeMailer=require('nodemailer');
var transport=nodeMailer.createTransport({

    host:'smtp.gmail.com',  // simple mail tranfer protocol(smtp)? smtp is used to send and receive email
    port:587,
    secure:false,
    requireTLS:true,
    // TLS is a way to provide secure connections between a client and a server
    auth:
    {
        user:'jisoryas26@gmail.com',
        pass:'bmugjsrxazbwftxj'
    }
});
var mailOptions ={
    from:'jisoryas26@gmail.com',
    to:'kishan2401@gmail.com',
    subject:'node mail',
    text:"hello uncleeeee"
}
transport.sendMail(mailOptions,function(error,info)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log("email has been sent",info);
    }
})