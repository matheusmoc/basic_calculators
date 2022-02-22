
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// respond with "hello world" when a GET request is made to the homepage
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});



app.post("/bmicalculator", (req, res) => {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var resultBmi = ((height* height) / weight);
    res.send("IBM result is: " + resultBmi);
});


app.listen(3000, () => {
    console.log("server up");
});