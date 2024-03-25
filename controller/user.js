const { userModel } = require('../model/userSchema');
const handleSignUp = (req, res) => {
    res.render('signup');
};
const handleLogin = (req, res) => {
    res.render('login');
};
const handleUserLogin = async (req, res) => {
    const {email, password } = req.body;
    // console.log(email);
    // console.log(password);
    const user = await userModel.findOne({ email, password });
    if (!user) {
        console.log('User not registered.');
        res.status(200).redirect('/api/login');
    }
    else {

        res.redirect('/user/api/home');
    }

}
const handleNewUserSignUp = async (req, res) => {
    // console.log('Uhh');
    console.log(req.body);
    const { name, email, password } = req.body;
    console.log(name);
    console.log(email);
    console.log(password);
    const user = await userModel.create({
        name: name,
        email: email,
        password: password
    });
    res.status(200).json({ msg: 'User SignUp Successfully ' });
}

// Handle home page
const handleHomePage = (req, res) => {
    
    res.render('home.ejs',{name:'Dipendra'});
}
module.exports = { handleNewUserSignUp, handleSignUp, handleUserLogin, handleLogin, handleHomePage }