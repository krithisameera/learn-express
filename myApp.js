let express = require('express');
let app = express();
require('dotenv').config()
//absolutePath = __dirname + '/views/index.html'


console.log("Hello World")

/* app.get('/', function(req,res) {
    res.send("Hello Express");
}) */

app.get('/', function(req,res) {//route handler
    res.sendFile( __dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));//middleware function express.static


/* app.get('/json', (req, res) => {
    res.json({
        message:"Hello json"
    });
}); */



app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({
            message:"HELLO JSON"
        });
    } else {
        res.json({
            message:"Hello json"
        });
    }
});


















 module.exports = app;
