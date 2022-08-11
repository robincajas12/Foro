const makePostContainer = $('#make-post__container');
const makePostBtn = $('#make-post-btn');
makePostBtn.on('click', ()=>{
    makePostContainer.fadeToggle();
    crearPostBtn.css('background-color', 'red')
})