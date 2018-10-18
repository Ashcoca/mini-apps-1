const express = require('express');
var bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.listen(port, () => console.log('Express is listening on port', port))
