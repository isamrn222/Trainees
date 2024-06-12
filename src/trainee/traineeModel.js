const mongoose = require('mongoose');

// Definición del esquema para el modelo de cliente
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
        ref: 'institute', // Nombre del modelo al que se hace referencia mirar si es con s o sin s
        required: true
    },
    // Otros campos que puedas necesitar para tu modelo de cliente
}, { timestamps: true }); // Añadir timestamps para createdAt y updatedAt

// Crear el modelo de cliente a partir del esquema
const Trainee = mongoose.model('Trainee', traineeSchema);// singular

module.exports=Trainee;