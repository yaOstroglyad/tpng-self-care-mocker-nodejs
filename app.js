const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const authRoute = require("./routes/auth.route");
const selfCareRoute = require("./routes/self-care.route");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/api/sso/auth', authRoute);
app.use('/api/sc-logic-v2', selfCareRoute);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(errorController.get404);

app.listen(3000);
