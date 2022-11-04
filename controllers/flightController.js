const Flights = require("../models/Flight.js")

// get all flights
exports.getFlights = async (req, res) => {
  try {
    const flight = Flights
    res.status(200).json({
      message: "all flights",
      flight: flight,
    })
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

// get single flights

// book a flight

// update a flight

// delete a flight
