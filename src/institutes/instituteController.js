const Institute = require('../institutes/instituteModel');

// Controlador para obtener todos los clientes
exports.getInstitutes = async (req, res) => {
    try {
        const institutes = await Institute.find();
        if (institutes.length === 0) {
            return res.status(404).json({ message: 'No se encontraron instituciones' });
        }
        res.json(institutes);
    } catch (err) {
        console.error('Error al obtener institucion:', err);
        res.status(500).json({ message: 'Ocurrió un error al obtener las instituciones' });
    }
};


// Controlador para obtener un cliente por su ID
exports.getInstituteById = async (req, res) => {
    try {
        const institute = await Institute.findById(req.params.id);
        if (!institute) {
            return res.status(404).json({ message: 'Institución no encontrada' });
        }
        res.json(institute);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener la institución' });
    }
};


//Controlador para crear nuvo institucion
exports.createInstitute = async (req, res) => {
    const { Nit, Name, Location, Contact, ContactEmail, ContactPhoneNumber} = req.body;
    const institute = new Institute({
        Nit,
        Name,
        Location,
        Contact,
        ContactEmail,
        ContactPhoneNumber 
    });
    try {
        const newinstitute = await institute.save();
        res.status(201).json(newinstitute);
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al crear la institución' });
    }
};

// Controlador para actualizar un cliente existente
exports.updateInstitute = async (req, res) => {
    try {
        const institute = await Institute.findById(req.params.id);
        if (!institute) {
            return res.status(404).json({ message: 'Institución no encontrado' });
        }
        
        const { Nit, Name, Location, Contact, ContactEmail, ContactPhoneNumber } = req.body;
        if (Nit != null) institute.Nit = Nit;
        if (Name != null) institute.Name = Name;
        if (Location != null) institute.Location = Location;
        if (Contact != null) institute.Contact = Contact;
        if (ContactEmail != null) institute.ContactEmail = ContactEmail;
        if (ContactPhoneNumber != null) institute.ContactPhoneNumber = ContactPhoneNumber;

        const updatedinstitute = await institute.save();
        res.json(updatedinstitute);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Ocurrió un error al actualizar la institución' });
    }
};


// Controlador para eliminar un cliente
exports.deleteInstitute = async (req, res) => {
    try {
        const institute = await Institute.findById(req.params.id);
        if (!institute) {
            return res.status(404).json({ message: 'Institucion no encontrada' });
        }
        await institute.deleteOne();
        res.json({ message: 'Institucion eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al eliminar la institucion'});
    }
};




