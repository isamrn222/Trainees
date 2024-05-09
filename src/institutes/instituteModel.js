const mongoose = require('mongoose');

// Definición del esquema para el modelo de cliente
const instituteSchema = new mongoose.Schema({
    Nit: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true
    },
    ContactEmail: {
        type: String,
        required: true
    },
    ContactPhoneNumber: {
        type: Number,
        required: true
    },
    // Otros campos que puedas necesitar para tu modelo de cliente
}, { timestamps: true }); // Añadir timestamps para createdAt y updatedAt

// Crear el modelo de cliente a partir del esquema
const Institute = mongoose.model('Institute', instituteSchema);// singular

module.exports=Institute;