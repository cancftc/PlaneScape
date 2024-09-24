const mongoose = require("mongoose");

const flightsSchema = new mongoose.Schema({
    _id: String,
    departureTime: String,
    arrivalTime: String,
    airline: String,
    flightName: String,
    flightDuration: String,
    arrivalAirport: String
});

const Flights = mongoose.model("Flights",flightsSchema);

module.exports = Flights;