const express=require('express');
const dotenv=require('dotenv');
const  app=express();
dotenv.config();
const {chats}= require('./data/data')
app.get('/',(req,res)=>{
    res.send("App is running");
})


app.get('/api/chats',(req,res)=>{
    res.send(chats)
})


app.get('/api/chats/:id', (req, res) => {
    const chatId = req.params.id;
    console.log(chatId);
    const singleChat = chats.find((c) => c._id === chatId);

      if (!singleChat) {
        return res.status(404).json({ message: 'Chat not found' });
    }

     res.send(singleChat);
});


const port=process.env.PORT||5000;
app.listen(port,
    console.log(`Server is listening on ${port}`));

