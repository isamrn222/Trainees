const express = require('express');
const router= express.Router();
const ResponsabilitieController= require('./responsabilitieController');

//Ruta para obtener todas las responsabilidades
router.get('/',ResponsabilitieController.getResponsabilitie);

//ruta para obtener todas las responsabilidades por su id
router.get('/:id',ResponsabilitieController.getResponsabilitieById);

//ruta para crear nuevas responsabilidades
router.post('/',ResponsabilitieController.createResponsabilitie);

//ruta para crear nuevas responsabilidades
router.put('/:id',ResponsabilitieController.updateResponsabilitie);

//ruta para eliminar responsabilidades
router.delete('/:id',ResponsabilitieController.deleteResponsabilitie);

module.exports=router;


