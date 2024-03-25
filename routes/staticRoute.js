const express=require('express');
const {handleSignUp,handleLogin}=require('../controller/user');
const staticRouter=express.Router();
staticRouter.get('/api/signup',handleSignUp);
staticRouter.get('/api/login',handleLogin);
module.exports={staticRouter,}