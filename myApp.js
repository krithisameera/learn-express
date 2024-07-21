const bodyParser = require('body-parser');
let express = require('express');
let app = express();
require('dotenv').config()
//absolutePath = __dirname + '/views/index.html'
console.log("Hello World")

/* app.get('/', function(req,res) {
    res.send("Hello Express");
}) */


/* app.use( function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});    
 */
app.use('/', bodyParser.urlencoded({extended: false}));
//route handler
app.get('/', function(req,res) {
    res.sendFile( __dirname + '/views/index.html');
});

//middleware function express.static
app.use('/public', express.static(__dirname + '/public'));

/* app.get('/json', (req, res) => {
    res.json({
        message:"Hello json"
    });
}); */

/* app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({
            message:"HELLO JSON"
        });
    } else {
        res.json({
            message:"Hello json"
        });
    }
}); */

/* app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({time: req.time});
}); */

/* app.get('/:word/echo', function(req, res){
    const {word} = req.params;
    res.json({echo: word});
}); */

/* app.get("/name", (req,res) => {
    const firstname = req.query.first;
    const lastname = req.query.last;      

    //const fullname = `${firstname} ${lastname}`
    res.json({
    name: `${firstname} ${lastname}`
    });
    
}); */
    
app.post('/name', (req, res) => {
    const firstname = req.body.first;
    const lastname = req.body.last;

    res.json({
        name: `${firstname} ${lastname}`
    });
});











 module.exports = app;
