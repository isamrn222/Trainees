const express = require('express');
const router= express.Router();
const TraineeController= require('./traineeController');

//Ruta para obtener todas las responsabilidades
router.get('/',TraineeController.getTrainee);

//ruta para obtener todas las responsabilidades por su id
router.get('/:id',TraineeController.getTraineeById);

//ruta para crear nuevas responsabilidades
router.post('/',TraineeController.createTrainee);

//ruta para crear nuevas responsabilidades
router.put('/:id',TraineeController.updateTrainee);

//ruta para eliminar responsabilidades
router.delete('/:id',TraineeController.deleteTrainee);

module.exports=router;


