const express = require('express');
const router= express.Router();
const ResponsabilitiestraineeController= require('./responsabilitiestraineeController');

//Ruta para obtener todas las responsabilidades
router.get('/',ResponsabilitiestraineeController.getResponsabilitiesTrainees);

//ruta para obtener todas las responsabilidades por su id
router.get('/:id',ResponsabilitiestraineeController.getResponsabilitiesTraineesById);

//ruta para crear nuevas responsabilidades
router.post('/',ResponsabilitiestraineeController.createResponsabilitiesTrainees);

//ruta para crear nuevas responsabilidades
router.put('/:id',ResponsabilitiestraineeController.updateResponsabilitiesTrainees);

//ruta para eliminar responsabilidades
router.delete('/:id',ResponsabilitiestraineeController.deleteResponsabilitiesTrainees);

module.exports=router;


