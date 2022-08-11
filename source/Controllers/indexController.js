const indexView = (req,res) =>{
    res.render('index', 
    {
        title: 'index',
        css: 'indexStyles'
    });
}
module.exports = {
    indexView
}