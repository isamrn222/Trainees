const Responsabilitiemodel = require('../responsabilitie/responsabilitieModel');

// Controlador para obtener todos los clientes
exports.getResponsabilitie = async (req, res) => {
    try {
        const responsabilitie = await Responsabilitiemodel.find();
        if (responsabilitie.length === 0) {
            return res.status(404).json({ message: 'No se encontraron responsabilidades' });
        }
        res.json(responsabilitie);
    } catch (err) {
        console.error('Error al obtener responsabilidades:', err);
        res.status(500).json({ message: 'Ocurrió un error al obtener las responsabilidades' });
    }
};


// Controlador para obtener un cliente por su ID
exports.getResponsabilitieById = async (req, res) => {
    try {
        const responsabilitie = await Responsabilitiemodel.findById(req.params.id);
        if (!responsabilitie) {
            return res.status(404).json({ message: 'Responsabilidad no encontrada' });
        }
        res.json(responsabilitie);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener las responabilidades' });
    }
};


//Controlador para crear nuvo institucion
exports.createResponsabilitie = async (req, res) => {
    const { Description, Location, Duration, State} = req.body;
    const responsabilitie = new Responsabilitiemodel({
        Description,
        Location,
        Duration,
        State,
    });
    try {
        const newresponsabilitie = await responsabilitie.save();
        res.status(201).json(newresponsabilitie);
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al crear la responsabilidad' });
    }
};

// Controlador para actualizar un cliente existente
exports.updateResponsabilitie = async (req, res) => {
    try {
        const responsabilitie = await Responsabilitiemodel.findById(req.params.id);
        if (!responsabilitie) {
            return res.status(404).json({ message: 'Responsabilidad no encontrada' });
        }
        
        const { Description, Location, Duration, State} = req.body;
        if (Description != null) responsabilitie.Description = Description;
        if (Location != null) responsabilitie.Location = Location;
        if (Duration != null) responsabilitie.Duration = Duration;
        if (State != null) responsabilitie.State = State;


        const updateresponsabilitie = await responsabilitie.save();
        res.json(updateresponsabilitie);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Ocurrió un error al actualizar la responsabilidad' });
    }
};


// Controlador para eliminar un cliente
exports.deleteResponsabilitie = async (req, res) => {
    try {
        const responsabilitie = await Responsabilitiemodel.findById(req.params.id);
        if (!responsabilitie) {
            return res.status(404).json({ message: 'Responsabilidad no encontrada' });
        }
        await responsabilitie.deleteOne();
        res.json({ message: 'Institucion eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al eliminar la responsabilidad'});
    }
};




