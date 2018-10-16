const express = require('express');
const app = express();
const port = 3000;
const client = require('./client/app.js')


//this line tells the server to serve up index.html for any requests to '/'
app.use(express.static('client'));

app.post('/upload_json', (req, res) => {
    
});


app.listen(port, () => console.log('Express is listening on port', port))