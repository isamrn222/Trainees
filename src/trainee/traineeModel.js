const mongoose = require('mongoose');

// Definición del esquema para el modelo de cliente
const traineeSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    DocumentType: {
        type: String,
        required: true
    },
    DocumentNumber: {
        type: Number,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    InstituteID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'institute', // Nombre del modelo al que se hace referencia mirar si es con s o sin s
        required: true
    },
    // Otros campos que puedas necesitar para tu modelo de cliente
}, { timestamps: true }); // Añadir timestamps para createdAt y updatedAt

// Crear el modelo de cliente a partir del esquema
const Trainee = mongoose.model('Trainee', traineeSchema);// singular

module.exports =Trainee;