const { CityService } = require('../services/index');

/**
 * POST
 * data -> req.body
 */

const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.createCity({name:req.body});
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city.",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
};

//delete: /city/:id
const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity({cityId:req.params.id});
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city.",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
};

//get: /city/:id
const get = async (req,res) => {
    try {
        const city = await cityService.getCity({cityId:req.params.id});
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched a city.",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
};

//patch: /city/:id -> req.body
const update = async (req,res) => {
    try {
        const city = await cityService.updateCity({name:req.body,cityId:req.params.id});
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched a city.",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    update
};