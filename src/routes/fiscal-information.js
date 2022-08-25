const { Router } = require('express');
const router = Router();
const data = require('../data/fiscal-information.json');

router.get('/iban',(req, res) => {
    const { IBAN } = data[Math.round(Math.random()*data.length)];
    res.json({IBAN}); 
});

router.get('/dni',(req, res) => {
    const letter = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    const number = Math.round(Math.random()*100000000);
    const aux = number % 23;
    const dni = number + "-" + letter[aux];
    res.json({dni});
});


router.get('/password',(req, res) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!%&/()=?¿";
    const length = 10;
    let password = "";
    for (let i = 0; i < length; i++) {
        var j = Math.floor(Math.random()*charset.length);
        password += charset[j];
    }
    console.log(password);
    res.json({password});
});

router.get('/password-length-25',(req, res) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!%&/()=?¿";
    const length = 25;
    let password = "";
    for (let i = 0; i < length; i++) {
        var j = Math.floor(Math.random()*charset.length);
        password += charset[j];
    }
    console.log(password);
    res.json({password});
});

router.get('/password-length-50',(req, res) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!%&/()=?¿";
    const length = 50;
    let password = "";
    for (let i = 0; i < length; i++) {
        var j = Math.floor(Math.random()*charset.length);
        password += charset[j];
    }
    console.log(password);
    res.json({password});
});
module.exports = router;