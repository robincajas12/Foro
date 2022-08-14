const {isMobile} = require('../deviceClient');
const {Discussion} = require('../mongodb/index');
const homeView = (req,res) => {
    const parameters = {
        css: 'makePostStyles',
        title: 'Home', 
        isMobile: isMobile(req),
        posts: [
            {
                title: 'Home lorem xd', 
                content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.', 
                _id: 1
            }
        ]
    }
    Discussion.find((err, data)=>{
        parameters.discussions = data;  
        res.render('home', parameters);
    })
}

module.exports = {
    homeView
}