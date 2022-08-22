const { Router } = require('express');
const router = Router();
const data = require('../../README.json');
const commands_data = require('../../README-COMMAND-LIST.json');

router.get('/',(req, res) => {
    res.json(data);
});

router.get('/h',(req, res) => {
    res.json(commands_data);
});

router.get('/help',(req, res) => {
    res.json(commands_data);
});

router.get('/commands',(req, res) => {
    res.json(commands_data);
});

router.get('/cmd',(req, res) => {
    res.json(commands_data);
});

module.exports = router;