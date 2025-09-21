const { AirportService } = require('../services/index')

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        // console.log(req.body);
        const airport = await airportService.createAirport(req.body.name,req.body.address,req.body.cityId);
        res.status(201).json({
            data: airport,
            success: true,
            message:'Ariport created successfully.',
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create the airport',
            err: error
        });
    }
};

const destroy = async (req,res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        res.status(200).json({
            data: response,
            success: true,
            message:'Ariport deleted successfully.',
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the airport',
            err: error
        });
    }
};

const get = async (req,res) => {
    try {
        const airport = await airportService.getAirport(req.params.id);
        res.status(200).json({
            data: airport,
            success: true,
            message:'Ariport fetched successfully.',
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the airport',
            err: error
        });
    }
};

const getAll = async (req,res) => {
    try {
        const airport = await airportService.getAllAirports();
        res.status(200).json({
            data: airport,
            success: true,
            message:'Ariports fetched successfully.',
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the airports',
            err: error
        });
    }
};

const update = async (req,res) => {
    try {
        const response = await airportService.updateAirport(req.body,req.params.id);
        res.status(200).json({
            data: response,
            success: true,
            message:'Ariport Updated successfully.',
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the airport',
            err: error
        });
    }
};

module.exports = {
    create,
    update,
    get,
    getAll,
    destroy
};