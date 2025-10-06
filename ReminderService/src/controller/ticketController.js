const TicketService = require('../service/emailService');

const create = async (req,res) => {
    try {
        console.log(req.body);
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully registered an email reminder'
        });
    } catch (error) {
        return res.status(201).json({
            success: false,
            data: {},
            err: error,
            message: 'Can not register the email reminder'
        });
    }
}

module.exports = {
    create,
}