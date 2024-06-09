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
    State: {
        type: Number,
        required: [true,'el campo estado es requerido']
    },
    TraineeID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trainee', 
        required: [true, 'El campo nombre del practicante es requerido']
    }],
    ResponsabilitieID:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsabilitie', 
        required: [true,'el campo responsabilidades es requerido']
    }],
    // Otros campos que puedas necesitar para tu modelo de cliente
}, { timestamps: true }); // Añadir timestamps para createdAt y updatedAt

// Crear el modelo de cliente a partir del esquema
const ResponsabilitiesTrainees= mongoose.model('responsabilitiestrainee', ResponsabilitiesTraineeSchema);// singular

module.exports=ResponsabilitiesTrainees;