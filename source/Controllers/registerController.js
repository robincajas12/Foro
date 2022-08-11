const defaulSettings = {
    title: 'default',
    css: 'xd'
}
const registerView = (req,res) =>{
    res.render('register', defaulSettings);
}

const loginView = (req,res) => {
    res.render('login', defaulSettings);
}

module.exports = {
    registerView,
    loginView
}