const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// Define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip); //post method adds trip

router
    .route('/trips/:tripCode')
module.exports = router;
