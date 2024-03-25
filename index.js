
const express = require('express');
const {handleMongodbConnection}=require('./connection');
const {userRouter}=require('./routes/userRoutes');
const {staticRouter}=require('./routes/staticRoute');
const path=require('path');
const PORT = 8000;
const app = express();

// mongodb connection goes here
handleMongodbConnection('mongodb://127.0.0.1:27017/auth-app').then(()=>{
    console.log('MongoDB connected.')
}).catch((e)=>{
    console.log('Something bad',e)
});

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// configuring ejs engine
app.set('view engine','ejs');
app.set('views', path.resolve('./views'));


// configuring css


// routing goes here
app.use('/',staticRouter);
app.use('/user',userRouter);


app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)});