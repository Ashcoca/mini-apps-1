const express = require('express');
const app = express();
const port = 3000;
// const client = require('./client/app.js')
const bodyParser = require('body-parser');
let ejs = require('ejs');


var storage = [];

// var output = `firstName,lastName,county,city,role,sales
// Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000
// Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000
// Smitty,Won,San Mateo,Redwood City,Sales Person,4800000
// Allen,Price,San Mateo,Burlingame,Sales Person,2500000
// Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000`

//this line tells the server to serve up index.html for any requests to '/'
app.use(express.static('client'));

app.set('view engine', 'ejs');


//this line will parse the bodies of all incoming requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/upload_json', (req, res) => {
    var input = req.body['input-area'];
    //there was one ; messing up my json parse? So I removed it here
    var cleaned = input.replace(/;/g, '');
    var json = JSON.parse(cleaned);
    var output = csvFormatter(json);
    // console.log(storage);
    test = JSON.stringify(output)
    var cleanest = test.replace(/[_a-zA-Z0-9-]/, "");


    console.log(cleanest)
    res.end(
    `<html>
    <head>
        <title>JSON -> CSV Converter</title>
        <script src = "app.js"></script>
        <script src = "styles.css"></script>
        <!-- <script src="ejs.js"></script> -->

    </head>
    <body>
        <div>
            <form method="POST" action="/upload_json">
                <label for="input-area">Submit your Data</label>
                <br/>
                <textarea id="input-area" name="input-area" rows="3" placeholder="Enter Data"></textarea>
                <br/><input type="submit" name="submit">
            </form>
            <br/>
            <div id="confirmation">
            ${cleanest}
            </div>
        </div>
    </body>


</html>`)
});


//this recursive function really got away from me
var csvFormatter = function(input) {
    //implement recursion fn to format json data
    // var json = JSON.parse(input)
    var jsonStorage = [];
    for (var key in input) {
        jsonStorage.push(key)
    }
    var helper = function(input) {

    jsonStorage.push('@')
    for (var key in input) {
        if (Array.isArray(input[key]) && input[key].length > 1) {
            helper(input[key][0])
        }
        jsonStorage.push(input[key])
        delete input[key]
        console.log(input)
    }
    }
    helper(input);
    return jsonStorage;

}



app.listen(port, () => console.log('Express is listening on port', port))

// module.exports = storage;