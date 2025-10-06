const sender = require('../config/emailConfig');
const { TicketRepository } = require('../repository/index');

const repo = new TicketRepository();

const sendBasicEmail = (from, to, mailSubject, mailBody) =>{
    sender.sendMail({
        from:from,
        to:to,
        subject:mailSubject,
        text:mailBody,
    })
}

const fetchPendingEmails = async ()=>{
    try {
        const response = await repo.get({status:"PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        throw {error};
    }
}

const updateTicket = async (ticketId,data)=>{
    try {
        const response = await repo.update(ticketId,data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}