const { Router } = require('express');
const router = Router();

router.get('/',(req, res) => {
    res.json({"Nombre":"Ejemplo"});
});

router.get('/test',(req, res) => {
    const data = {
        "Nombre":"John",
        "Apellidos":"Smith",
    };
    res.json(data);
});

module.exports = router;