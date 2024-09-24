const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database/db");


app.use(express.json());
app.use(cors());

// Uçuşlarla ilgili yönlendirmeler içeren modülü içe aktarıyoruz.
const flightRouter = require("./routers/flights.router");

// "/api/flights" rotasına gelen istekleri, flightRouter yönlendiriyoruz.
app.use("/api/flights", flightRouter);

connection();

const port = process.env.PORT || 5000;
app.listen(port,()=> console.log("Uygulama ayağa kalktı.")); 