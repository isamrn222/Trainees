const mongoose = require('mongoose');

// Definición del esquema para el modelo de cliente
const ResponsabilitiesTraineeSchema = new mongoose.Schema({
    StartDate: {
        type: String,
        required: [true,'el campo fecha de inicio es requerido']
    },
    FinishDate: {
        type: String,
        required: [true,'el campo fecha final es requerido']
    },
    Observations: {
        type: String,
        required: [true,'el campo observaciones es requerido']
    },
    TraineeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trainee', // Nombre del modelo al que se hace referencia mirar si es con s o sin s
        required: [true,'el campo nombre practicante es requerido']
    
    },
    ResponsabilitieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsabilitie', // Nombre del modelo al que se hace referencia mirar si es con s o sin s
        required: [true,'el campo responsabilidades es requerido']
    },
    // Otros campos que puedas necesitar para tu modelo de cliente
}, { timestamps: true }); // Añadir timestamps para createdAt y updatedAt

// Crear el modelo de cliente a partir del esquema
const ResponsabilitiesTrainees= mongoose.model('responsabilitiestrainee', ResponsabilitiesTraineeSchema);// singular

module.exports=ResponsabilitiesTrainees;