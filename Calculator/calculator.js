const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true/*allow use incorrect data*/}));//you can acess your routes and http request received on body

// GET method route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html"); //send html file on url.
});

app.post("/", (req, res) => {

    //console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var calculatorNumbers = num1 + num2;

    res.send("This result is: " + calculatorNumbers);
});


app.listen(3000, function () {
    console.log("server up");
});

