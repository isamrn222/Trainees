const mongoose = require('mongoose');

// Definición del esquema para el modelo de cliente
const responsabilitieSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: [true,'el campo descripción es requerido']
    },
    Location: {
        type: String,
        required: [true,'el campo ubicación es requerido']
    },
    Duration: {
        type: Number,
        required: [true,'el campo duración es requerido']
    },
    State: {
        type: Number,
        required: [true,'el campo estado es requerido']
    },
    // Otros campos que puedas necesitar para tu modelo de cliente
}, { timestamps: true }); // Añadir timestamps para createdAt y updatedAt

// Crear el modelo de cliente a partir del esquema
const Responsabilitie = mongoose.model('Responsabilitie', responsabilitieSchema);// singular

module.exports=Responsabilitie;