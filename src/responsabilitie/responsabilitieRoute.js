const express = require('express');
const router= express.Router();
const ResponsabilitieController= require('./responsabilitieController');

//Ruta para obtener todas las responsabilidades
router.get('/responsabilities',ResponsabilitieController.getResponsabilitie);

//ruta para obtener todas las responsabilidades por su id
router.get('/responsabilities/:id',ResponsabilitieController.getResponsabilitieById);

//ruta para crear nuevas responsabilidades
router.post('/responsabilities/create',ResponsabilitieController.createResponsabilitie);

//ruta para crear nuevas responsabilidades
router.put('/responsabilities/:id',ResponsabilitieController.updateResponsabilitie);

//ruta para eliminar responsabilidades
router.delete('/responsabilities/:id',ResponsabilitieController.deleteResponsabilitie);

module.exports=router;


