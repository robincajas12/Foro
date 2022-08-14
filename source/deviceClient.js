const parser = require('ua-parser-js');


function isMobile(req)
{
    const ua = parser(req.headers['user-agent']);
    const mobileDebives = ['iOS', 'Android[-x86]'];
    const userDevice = ua.os.name;
    if(mobileDebives.includes(userDevice)) return true;
    else false;
}
module.exports = {
    isMobile
}