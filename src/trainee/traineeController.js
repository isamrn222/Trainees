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


//Controlador para crear nuvo institucion
exports.createTrainee = async (req, res) => {
    const { FirstName, LastName, DocumentType, DocumentNumber, PhoneNumber, InstituteID} = req.body;
    const trainee = new Traineemodel({
        FirstName,
        LastName,
        DocumentType,
        DocumentNumber,
        PhoneNumber,
        InstituteID
    });
    try {
        const newtrainee = await trainee.save();
        res.status(201).json(newtrainee);
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al crear el practicante' });
    }
};

// Controlador para actualizar un cliente existente
exports.updateTrainee = async (req, res) => {
    try {
        const trainee = await Traineemodel.findById(req.params.id);
        if (!trainee) {
            return res.status(404).json({ message: 'Practicante no encontrado' });
        }
        
        const { FirstName, LastName, DocumentType,DocumentNumber, PhoneNumber, InstituteID} = req.body;
        if (FirstName != null) trainee.FirstName = FirstName;
        if (LastName != null) trainee.LastName = LastName;
        if (DocumentType != null) trainee.DocumentType = DocumentType;
        if (DocumentNumber != null) trainee.DocumentNumber = DocumentNumber;
        if (PhoneNumber != null) trainee.PhoneNumber = PhoneNumber;
        if (InstituteID != null) trainee.InstituteID = InstituteID;



        const updatetrainee = await trainee.save();
        res.json(updatetrainee);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Ocurrió un error al actualizar el practicante' });
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




