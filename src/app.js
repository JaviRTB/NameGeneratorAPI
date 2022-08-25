const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/names'));
app.use(require('./routes/contact-information'));
app.use(require('./routes/fiscal-information'));
app.use(require('./routes/adresses'));

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})
