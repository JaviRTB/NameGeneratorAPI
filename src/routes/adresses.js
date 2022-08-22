const { Router } = require('express');
const router = Router();
const data = require('../data/adresses.json');

router.get('/street',(req, res) => {
    const { street } = data[Math.round(Math.random()*data.length)];
    res.json({street});
});

router.get('/street-number',(req, res) => {
    const { street_number } = data[Math.round(Math.random()*data.length)];
    res.json({ street_number });
});

router.get('/street-type',(req, res) => {
    const { street_type } = data[Math.round(Math.random()*data.length)];
    res.json({street_type});
});

router.get('/street-adress',(req, res) => {
    const { street_adress } = data[Math.round(Math.random()*data.length)];
    res.json({street_adress});
});

router.get('/zipcode',(req, res) => {
    const { prov_zipcode } = data[Math.round(Math.random()*data.length)];
    prov_zipcode ? zipcode = prov_zipcode : zipcode = Math.round(Math.random()*100000); 
    res.json({zipcode});
});

router.get('/city',(req, res) => {
    const { city } = data[Math.round(Math.random()*data.length)];
    res.json({city});
});

router.get('/country',(req, res) => {
    const { country } = data[Math.round(Math.random()*data.length)];
    res.json({country});
});

module.exports = router;