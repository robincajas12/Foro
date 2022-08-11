const homeView = (req,res) => {
    res.render('home', 
    {
        css: 'makePostStyles',
        title: 'Home', 
        posts: [
            {
                title: 'Lorem rerom', 
                content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.', 
                _id: 1
            }
        ]
        
    });
}

module.exports = {
    homeView
}