const Traineemodel = require('../trainee/traineeModel');

// Controlador para obtener todos los clientes
exports.getTrainee = async (req, res) => {
    try {
        const trainee = await Traineemodel.find();
        if (trainee.length === 0) {
            return res.status(404).json({ message: 'No se encontraron practicantes' });
        }
        res.json(trainee);
    } catch (err) {
        console.error('Error al obtener practicantes:', err);
        res.status(500).json({ message: 'Ocurrió un error al obtener las responsabilidades' });
    }
};


// Controlador para obtener un cliente por su ID
exports.getTraineeById = async (req, res) => {
    try {
        const trainee = await Traineemodel.findById(req.params.id);
        if (!trainee) {
            return res.status(404).json({ message: 'Practicante no encontrado' });
        }
        res.json(trainee);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener los practicantes' });
    }
};


exports.createTrainee = async (req, res) => {

    try {
        const Trainee = new Traineemodel(req.body);
        
        await Trainee.save();
        res.status(201).send(Trainee);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Controlador para actualizar un cliente existente
exports.updateTrainee = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['FirstName', 'LastName', 'DocumentType', 'DocumentNumber', 'PhoneNumber','State','Email', 'InstituteID'];


        const isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send({ message: 'Actualización no permitida' });
        }

        const trainees = await Traineemodel.findById(req.params.id);
        if (!trainees) {
            return res.status(404).send({ message: 'Practicante no encontrado' });
        }

        updates.forEach(update => trainees[update] = req.body[update]);
        await trainees.save();

        res.status(200).send(trainees);
    } catch (error) {
        res.status(400).send({ message: error.message });


    } 
};


// Controlador para eliminar un cliente
exports.deleteTrainee = async (req, res) => {
    try {
        const trainee = await Traineemodel.findById(req.params.id);
        if (!trainee) {
            return res.status(404).json({ message: 'Practicante no encontrado' });
        }
        await trainee.deleteOne();
        res.json({ message: 'Practicante eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al eliminar el practicante'});
    }
};




