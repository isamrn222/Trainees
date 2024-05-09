const mongoose = require('mongoose');

// Definición del esquema para el modelo de cliente
const responsabilitieSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Duration: {
        type: String,
        required: true
    },
    State: {
        type: Number,
        required: true
    },
    // Otros campos que puedas necesitar para tu modelo de cliente
}, { timestamps: true }); // Añadir timestamps para createdAt y updatedAt

// Crear el modelo de cliente a partir del esquema
const Responsabilitie = mongoose.model('Responsabilitie', responsabilitieSchema);// singular

module.exports=Responsabilitie;