const mongoose = require('mongoose');

// Definición del esquema para el modelo de cliente
const instituteSchema = new mongoose.Schema({
    Nit: {
        type: String,
        unique:true,
        trim:true,
        required: [true,'el campo Nit es requerido']
    },
    Name: {
        type: String,
        required: [true,'el campo nombre es requerido'],
        match: [/^[A-Za-zÁÉÍÓÚÑñáéíóú\s]+$/, 'Solo se permiten letras y espacios en el campo nombres Apellidos']
    },
    Location: {
        type: String,
        required: [true,'el campo ubicación es requerida']
        
    },
    Contact: {
        type: String,
        trim:true,
        required: [true,'el campo nombre contacto es requerido'],
        match: [/^[A-Za-zÁÉÍÓÚÑñáéíóú\s]+$/, 'Solo se permiten letras y espacios en el campo nombres Apellidos']
    },
    ContactEmail: {
        type: String,
        required: [true,'el campo email es requerido']
    },
    ContactPhoneNumber: {
        type: Number,
        required: [true,'el campo teléfono es requerido'],
        validate: {
            validator: function (value) {
                return /^[0-9]+$/.test(value) && /^\d{7,14}$/.test(this.ContactPhoneNumber);
            },
            message: 'El número de teléfono debe contener solo números y debe contener entre 7 y 14 dígitos numéricos'
        },
    },
    // Otros campos que puedas necesitar para tu modelo de cliente
}, { timestamps: true }); // Añadir timestamps para createdAt y updatedAt

// Crear el modelo de cliente a partir del esquema
const Institute = mongoose.model('Institute', instituteSchema);// singular

module.exports=Institute;