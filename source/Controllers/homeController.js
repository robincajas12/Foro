const {isMobile} = require('../deviceClient');
const homeView = (req,res) => {
    res.render('home', 
    {
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
        
    });
}

module.exports = {
    homeView
}