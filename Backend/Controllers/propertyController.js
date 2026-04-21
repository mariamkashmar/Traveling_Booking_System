const { validationResult } = require('express-validator');
const { insertproperty, getpropertyById, getproperty } = require('../Services/propertyService');

const insertpropertyController = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: errors.array(),
                message: 'Validation error'
            })
        }

        const { propertyname, type, city, country, price, guests, description } = req.body;
        const response = await insertproperty(propertyname, type, city, country, price, guests, description);
        res.status(201).json({
            success: true,
            data: response,
            message: 'property added successfully'
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server error'
        })
    }
}

const getpropertyByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getpropertyById(id);
        res.status(200).json({
            success: true,
            data: response,
            message: ' User returned Successfully'
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server error'
        })
    }

}

const getpropertyController = async (req, res) => {
    try {

        const response = await getproperty();
        res.status(200).json({
            success: true,
            data: response,
            message: 'property added successfully'
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server error'
        })
    }

}

module.exports = { insertpropertyController, getpropertyByIdController, getpropertyController }