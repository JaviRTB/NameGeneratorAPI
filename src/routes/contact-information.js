const { Router } = require('express');
const router = Router();
const data = require('../data/contact-information.json');

router.get('/email',(req, res) => {
    const { email } = data[Math.round(Math.random()*data.length)];
    res.json({email});
});
router.get('/phone',(req, res) => {
    const { phone } = data[Math.round(Math.random()*data.length)];
    res.json({phone});
});

module.exports = router;