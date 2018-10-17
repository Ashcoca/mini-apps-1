const express = require('express');
const app = express();
const port = 3000;
// const client = require('./client/app.js')
const bodyParser = require('body-parser');

var storage = [];

//this line tells the server to serve up index.html for any requests to '/'
app.use(express.static('client'));

//this line will parse the bodies of all incoming requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/upload_json', (req, res) => {
    var input = req.body['input-area'];
    //there was one ; messing up my json parse? So I removed it here
    // var cleaned = input.replace(/;/g, '');
    var json = JSON.parse(input)
    var output = csvFormatter(json)
    // storage.push(json)
    // console.log(storage);

    res.send(output)
});

var csvFormatter = function(input) {
    //implement recursion fn to format json data
    // var json = JSON.parse(input)
    var jsonStorage = [];
    for (var key in input) {
        jsonStorage.push(key)
    }
    var helper = function(children) {
        jsonStorage.push('@');
        for (var key in children) {
            // if (children[key] === "firstName" || "lastName" || "county" || "city" || "sales" || "children") {
            //     continue;
            // }
            if(Array.isArray(children[key])) {
                helper(children[key])
            }
            jsonStorage.push(children[key]);
        }
    }
    helper(input);
    console.log(jsonStorage);
    return jsonStorage;

}



app.listen(port, () => console.log('Express is listening on port', port))

// module.exports = storage;