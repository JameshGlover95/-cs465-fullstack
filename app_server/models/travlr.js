const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true }, // Keep as String
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true }, // Keep as String if needed
    image: { type: String, required: true },
    description: { type: String, required: true }
});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
