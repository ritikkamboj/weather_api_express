const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const fetch = require('node-fetch');

dotenv.config({ path: "./config.env" });

const app = express();


const apikey = process.env.API_KEY;
const port = process.env.PORT;



app.get("/", function (req, res) {

    const q = req.query.q;

    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${q}`;

    axios.get(url).then(response => {

        const data = response.data;
        // console.log(data);


    })

    res.send('jai shree ram ')
});

app.listen(3000, function () {
    console.log("server is running");
    console.log(port);

});

// http://api.weatherapi.com/v1/current.json?key=e59217de1a6c48dda54124038240210&q=ladwa