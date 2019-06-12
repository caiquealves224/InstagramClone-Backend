const express = require("express");
const mongoose = require("mongoose");
const rotas = require("./routes");

mongoose.connect("app:Vehement7", {
    useNewUrlParser: true,
});

const app = express();

app.use("/", rotas);

app.listen(3333);