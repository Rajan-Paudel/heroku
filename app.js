const admin =  require('firebase-admin')
const express = require('express')
const app = express()

var serviceAccount = require('./uicapp-78084-firebase-adminsdk-d4ys8-26ea2cca83.json');
app.use(express.json())
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.post('/send-noti',(req,res,)=>{
    console.log(req.body)
   const message = {
    notification:{
        title: "new notification",
        body: "title here"
    },
    tokens:req.body.tokens
}

admin.messaging().sendMulticast(message).then(res=>{
   console.log('send success')
}).catch(err=>{
    console.log(err)
}) 
})

app.get('/',(req,res) => {
    res.send("hello");
})

app.listen('https://uicserver.herokuapp.com/',()=>{
    console.log('server running')
})
