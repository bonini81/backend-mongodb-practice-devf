const { EnlacesService } = require('../services');

module.exports = {


    //Create
    create: async (req, res) => {

        try {
        const enlace = await EnlacesService.create(req.body);
        res.status(201).send(enlace);
        }
        catch (error) {
        res.status(400).send({ message: 'Error creating Enlace', err });
        }
        
    },



}