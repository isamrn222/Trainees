const express = require('express');
const router= express.Router();
const InstituteController= require('./instituteController');

//Ruta para obtener todas las instituciones
router.get('/',InstituteController.getInstitutes);

//ruta para obtener todas las instituciones por su id
router.get('/:id',InstituteController.getInstituteById);

//ruta para crear nuevas instituciones
router.post('/',InstituteController.createInstitute);

//ruta para crear nuevas instituciones
router.put('/:id',InstituteController.updateInstitute);

//ruta para eliminar instituciones
router.delete('/:id',InstituteController.deleteInstitute);

module.exports=router;


