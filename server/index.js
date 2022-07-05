require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express()


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}));
app.use('/api',router);
app.use(errorMiddleware);



const start = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/auth',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }).then(()=>console.log('connected DB'))
        app.listen(PORT,()=>console.log(`server started on PORT = ${PORT}`))

    }catch (e) {
        console.log(e)
    }

}

start()
