const express = require('express');
const router= express.Router();
const InstituteController= require('./instituteController');

//Ruta para obtener todas las instituciones
router.get('/institutes',InstituteController.getInstitutes);

//ruta para obtener todas las instituciones por su id
router.get('/institutes/:id',InstituteController.getInstituteById);

//ruta para crear nuevas instituciones
router.post('/institutes/create',InstituteController.createInstitute);

//ruta para crear nuevas instituciones
router.put('/institutes:id',InstituteController.updateInstitute);

//ruta para eliminar instituciones
router.delete('/institutes/:id',InstituteController.deleteInstitute);

module.exports=router;


