require('dotenv').config(); // Ensure this is the first line
const MONGODB_URI="mongodb+srv://chitareavinash6:LBUC89yql09ngObf@cluster0.qe3oi.mongodb.net/?retryWrites=true&w=majority"
console.log(MONGODB_URI);
const userRoutes= require('./routes/userRoutes.js')
const {notFound,errorHandler}=require  ('./middleware/errorMiddleware.js')
const express=require('express');

const  app=express();
const cors = require('cors');
app.use(cors({ origin: "http://localhost:5173" })); // Replace with your frontend's origin

app.use(express.json());



const {chats}= require('./data/data')
const connectDB=require('./config/db')
const colors=require("colors")



connectDB()
app.get('/',(req,res)=>{
    res.send("API is running sucessfully");
})



app.use('/api/user',userRoutes)


app.use(notFound);
app.use(errorHandler);


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
    console.log(`Server is listening on ${port}`.yellow.bold));

