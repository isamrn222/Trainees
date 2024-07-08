const mongoose = require('mongoose');

const traineeSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true,'el campo nombre es requerido'],
        match: [/^[A-Za-zÁÉÍÓÚÑñáéíóú\s]+$/, 'Solo se permiten letras y espacios en el campo nombres Apellidos']
    },
    LastName: {
        type: String,
        required: [true,'el campo apellido es requerido'],
        match: [/^[A-Za-zÁÉÍÓÚÑñáéíóú\s]+$/, 'Solo se permiten letras y espacios en el campo nombres Apellidos']
    },
    DocumentType: {
        type: String,
        required: [true , 'El tipo de documento es requerido'],
        enum: {
            values: ['Cedula', 'Tarjeta de identidad','Cedula extranjera'],
            message: '{VALUE} no es un tipo de documento válido'
        } 
    },
    DocumentNumber: {
        type: Number,
        required: [true,'el campo número de documento es requerido'],
        validate: {
            validator: function (value) {
                return /^[0-9]+$/.test(value) && /^\d{7,14}$/.test(this.DocumentNumber);
            },
            message: 'El número de documento debe contener solo números y debe contener entre 7 y 14 dígitos numéricos'
        },
    },
    PhoneNumber: {
        type: Number,
        required: [true,'el campo teléfono es requerido'],
        validate: {
            validator: function (value) {
                return /^[0-9]+$/.test(value) && /^\d{7,14}$/.test(this.PhoneNumber);
            },
            message: 'El número de teléfono debe contener solo números y debe contener entre 7 y 14 dígitos numéricos'
        },
    },
    State: {
        type: Number,
        required: [true,'el campo estado es requerido']
    },
    Email: {
        type: String,
        required: [true,'el campo email es requerido']
    },
    InstituteID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'institute',
        required: true
    },
    ResponsabilitieTraineeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'responsabilitiestrainee',
        required: true
    }
   
}, { timestamps: true });


const Trainee = mongoose.model('Trainee', traineeSchema);//se crea singular pero en mongo aparece con s

module.exports=Trainee;