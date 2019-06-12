const express = require("express");
const mongoose = require("mongoose");
const rotas = require("./routes");

mongoose.connect("mongodb+srv://app:Vehement7@cluster0-m3gfs.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

const app = express();

app.use("/", rotas);

app.listen(3333);