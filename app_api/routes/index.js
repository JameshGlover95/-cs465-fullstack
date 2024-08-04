const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// Define route for our trips endpoint
router.route('/trips').get(tripsController.tripsList);

module.exports = router;
