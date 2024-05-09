const ResponsabilitiesTraineemodel = require('../responsabilitiestrainee/responsabilitiestraineeModel');

// Controlador para obtener todos los clientes
exports.getResponsabilitiesTrainees = async (req, res) => {
    try {
        const responsabilitiesTrainees = await ResponsabilitiesTraineemodel.find();
        if (responsabilitiesTrainees.length === 0) {
            return res.status(404).json({ message: 'No se encontró La responsabilidad del practicante' });
        }
        res.json(responsabilitiesTrainees);
    } catch (err) {
        console.error('Error al obtener las responsabilidades de los practicantes:', err);
        res.status(500).json({ message: 'Ocurrió un error al obtener La responsabilidad del practicante' });
    }
};


// Controlador para obtener un cliente por su ID
exports.getResponsabilitiesTraineesById = async (req, res) => {
    try {
        const responsabilitiesTrainees = await ResponsabilitiesTraineemodel.findById(req.params.id);
        if (!responsabilitiesTrainees) {
            return res.status(404).json({ message: 'La responsabilidad del practicante no fue encontrada' });
        }
        res.json(responsabilitiesTrainees);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener La responsabilidad del practicante' });
    }
};


//Controlador para crear nuvo institucion
exports.createResponsabilitiesTrainees = async (req, res) => {
    const { StartDate, FinishDate, Observations, TraineeID,ResponsabilitieID,} = req.body;
    const responsabilitiesTrainees = new ResponsabilitiesTraineemodel({
        StartDate,
        FinishDate,
        Observations,
        TraineeID,
        ResponsabilitieID
    });
    try {
        const newresponsabilitiesTrainees= await responsabilitiesTrainees.save();
        res.status(201).json(newresponsabilitiesTrainees);
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al crear La responsabilidad del practicante' });
    }
};

// Controlador para actualizar un cliente existente
exports.updateResponsabilitiesTrainees = async (req, res) => {
    try {
        const responsabilitiesTrainees = await ResponsabilitiesTraineemodel.findById(req.params.id);
        if (!responsabilitiesTrainees) {
            return res.status(404).json({ message: 'La responsabilidad del practicante no fue encontrada' });
        }
        
        const {StartDate, FinishDate,Observations, TraineeID, ResponsabilitieID} = req.body;
        if (StartDate != null) responsabilitiesTrainees.StartDate = StartDate;
        if (FinishDate != null) responsabilitiesTrainees.FinishDate = FinishDate;
        if (Observations != null) responsabilitiesTrainees.Observations = Observations;
        if (TraineeID != null) responsabilitiesTrainees.TraineeID = TraineeID;
        if (ResponsabilitieID != null) responsabilitiesTrainees.ResponsabilitieID = ResponsabilitieID;



        const updateresponsabilitiesTrainees = await responsabilitiesTrainees.save();
        res.json(updateresponsabilitiesTrainees);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Ocurrió un error al actualizar la responsabilidad del practicante' });
    }
};


// Controlador para eliminar un cliente
exports.deleteResponsabilitiesTrainees = async (req, res) => {
    try {
        const responsabilitiesTrainees = await ResponsabilitiesTraineemodel.findById(req.params.id);
        if (!responsabilitiesTrainees) {
            return res.status(404).json({ message: 'la responsabilidad del practicante no fueron encontrados' });
        }
        await responsabilitiesTrainees.deleteOne();
        res.json({ message: 'Responsabilidad de practicante eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al eliminar la responsabilidad del practicante'});
    }
};




