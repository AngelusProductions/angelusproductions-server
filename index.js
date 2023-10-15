const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
require('dotenv').config({ path: '.env' });

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} 👂🏼`);
})