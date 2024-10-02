const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config({ path: "./config,env" });

const apikey = process.env.API_KEY;
const port = process.env.PORT;


const app = express();

app.get("/", function (req, res) {
    console.log(req.query.address);
    const address = req.query.address;

    // res.send("jai maata di");
    let url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${address}`;
    axios.get(url).then(res => {
        console.log(res.location.country);

    })


});

app.listen(3000, function () {
    console.log("server is running");
});
