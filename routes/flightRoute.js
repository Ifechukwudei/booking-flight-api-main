const router = require("express").Router()
const controller = require("../controllers/flightController")

router.get("/", controller.getFlights)
router.post("/", controller.bookFlight)
router.get("/:id", controller.getFlight)

module.exports = router
