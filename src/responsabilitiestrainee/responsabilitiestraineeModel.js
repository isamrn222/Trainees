const mongoose = require('mongoose');


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
    Duration: {
        type: String,
        validate: {
            validator: function(v) {
                return /^\d{1,2}:\d{2}$/.test(v); //esto es para validar que sea formato hh:mm
            },
            message: props => `${props.value} no es un formato de duración válido.`
        },
        required: true
    },

    TraineeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trainee', 
        required: [true, 'El campo nombre del practicante es requerido']
    },
    ResponsabilitieID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsabilitie', 
        required: [true,'el campo responsabilidades es requerido']
    }
  
}, { timestamps: true });


const ResponsabilitiesTrainees= mongoose.model('responsabilitiestrainee', ResponsabilitiesTraineeSchema);// singular

module.exports=ResponsabilitiesTrainees;