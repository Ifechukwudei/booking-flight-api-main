const router = require("express").Router()
const controller = require("../controllers/flightController")

router.get("/", controller.getFlights)

module.exports = router
