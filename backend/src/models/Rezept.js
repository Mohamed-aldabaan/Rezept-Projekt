const mongoose = require('mongoose');

const RezeptSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    zutaten: [],

    anweisungen: [],
    kochzeit:{
        type: Number,
        required: true
    },
    erstellungsdatum:{
        type: Date,
        default: Date.now   
    }
});

module.exports = mongoose.model("Rezept", RezeptSchema)