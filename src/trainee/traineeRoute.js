const express = require('express');
const router= express.Router();
const TraineeController= require('./traineeController');

//Ruta para obtener todas las responsabilidades
router.get('/trainees',TraineeController.getTrainee);

//ruta para obtener todas las responsabilidades por su id
router.get('/trainees/:id',TraineeController.getTraineeById);

//ruta para crear nuevas responsabilidades
router.post('/trainees/create',TraineeController.createTrainee);

//ruta para crear nuevas responsabilidades
router.put('/trainees/:id',TraineeController.updateTrainee);

//ruta para eliminar responsabilidades
router.delete('/trainees/:id',TraineeController.deleteTrainee);

module.exports=router;


