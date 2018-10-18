const express = require("express");
const app = express();
// const path = require('path');
const port = 3000;


app.use(express.static('client/dist'))



app.listen(port, () => console.log('Express is listening on port', port))
