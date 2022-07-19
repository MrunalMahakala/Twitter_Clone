

import Cards from "./dbcards.js"

const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
app.listen(3000, () => console.log("Server is running"));

// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://MrunalMahakala:Munna200399@cluster0.wvcqqwx.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
mongoose.connect(
    uri, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.get('/', (req, res) => {
    Cards.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        }
        console.log(err);
        res.send("Some error occured!")
    })
});