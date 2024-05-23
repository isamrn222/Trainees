const express = require('express');
const router= express.Router();
const ResponsabilitiestraineeController= require('./responsabilitiestraineeController');

//Ruta para obtener todas las responsabilidades
router.get('/responsabilitiestrainees',ResponsabilitiestraineeController.getResponsabilitiesTrainees);

//ruta para obtener todas las responsabilidades por su id
router.get('/responsabilitiestrainees/:id',ResponsabilitiestraineeController.getResponsabilitiesTraineesById);

//ruta para crear nuevas responsabilidades
router.post('/responsabilitiestrainees/create',ResponsabilitiestraineeController.createResponsabilitiesTrainees);

//ruta para crear nuevas responsabilidades
router.put('/responsabilitiestrainees/:id',ResponsabilitiestraineeController.updateResponsabilitiesTrainees);

//ruta para eliminar responsabilidades
router.delete('/responsabilitiestrainees/:id',ResponsabilitiestraineeController.deleteResponsabilitiesTrainees);

module.exports=router;


