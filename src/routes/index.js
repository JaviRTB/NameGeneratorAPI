const { Router } = require('express');
const router = Router();
const data = require('../data/names.json');

router.get('/random-name',(req, res) => {
    const { first_name } = data[Math.round(Math.random()*data.length)];
    const { last_name } = data[Math.round(Math.random()*data.length)];
    res.json({first_name, last_name});
});

module.exports = router;