const { Router } = require('express');
const router = Router();
const data = require('../data/names.json');


router.get('/first-name',(req, res) => {
    const { first_name } = data[Math.round(Math.random()*data.length)];
    res.json({first_name});
});
router.get('/last-name',(req, res) => {
    const { last_name } = data[Math.round(Math.random()*data.length)];
    res.json({last_name});
});

router.get('/complete-name',(req, res) => {
    const { first_name } = data[Math.round(Math.random()*data.length)];
    const { last_name } = data[Math.round(Math.random()*data.length)];
    const complete_name = first_name + " " + last_name; 
    res.json({complete_name});
});

router.get('/complete-name-email',(req, res) => {
    const { first_name } = data[Math.round(Math.random()*data.length)];
    const { last_name } = data[Math.round(Math.random()*data.length)];
    const email = first_name + last_name + "@gmail.com";
    res.json({email});
});

module.exports = router;