const mongoose = require('mongoose');

// Definición del esquema para el modelo de cliente
const ResponsabilitiesTraineeSchema = new mongoose.Schema({
    StartDate: {
        type: String,
        required: true
    },
    FinishDate: {
        type: String,
        required: true
    },
    Observations: {
        type: String,
        required: true
    },
    TraineeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trainee', // Nombre del modelo al que se hace referencia mirar si es con s o sin s
        required: true
    
    },
    ResponsabilitieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsabilitie', // Nombre del modelo al que se hace referencia mirar si es con s o sin s
        required: true
    },
    // Otros campos que puedas necesitar para tu modelo de cliente
}, { timestamps: true }); // Añadir timestamps para createdAt y updatedAt

// Crear el modelo de cliente a partir del esquema
const ResponsabilitiesTrainees= mongoose.model('responsabilitiestrainee', ResponsabilitiesTraineeSchema);// singular

module.exports=ResponsabilitiesTrainees;