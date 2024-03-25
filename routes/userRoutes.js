const express=require('express');
const {handleNewUserSignUp,handleUserLogin,handleHomePage}=require('../controller/user');
const userRouter=express.Router();
userRouter.post('/api/users',handleNewUserSignUp);
userRouter.post('/api/login',handleUserLogin);
userRouter.get('/api/home',handleHomePage);
module.exports={userRouter,}