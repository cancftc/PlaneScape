const express = require("express");
const router = express.Router();
const {v4:uuidv4} = require("uuid");
const Flights = require("../models/flights")

// Uçuşu ekleme
router.post("/add", async(req, res)=> {
    try {
        const {departureTime, arrivalTime, airline, flightDuration, arrivalAirport, flightName} = req.body;

        const flights = new Flights({
            _id: uuidv4(),
            departureTime: departureTime,
            arrivalTime: arrivalTime,
            airline: airline,
            flightDuration: flightDuration,
            arrivalAirport: arrivalAirport,
            flightName: flightName,
        })

        await flights.save();
        res.json({message: "Biletiniz oluşturuldu"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Uçuşları listeleme
router.get("/getAll", async (req, res) => {
    try {
        const flights = await Flights.find();
        res.json(flights);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;