const { StatusCodes } = require('http-status-codes');

const { ValidationError, AppError } = require('../utils/errors/index')
const { Booking } = require('../models/index');

class BookingRepository {
    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error.name=='SequielizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot create Booking',
                'There was some error creating a booking. Please try again later.',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async updateBooking(bookingId,data){
        try {
            await Booking.update(data,{
                where:{
                    id:bookingId
                }
            });
            const updatedBooking = await Booking.findByPk(bookingId);
            if(data.status){
                updatedBooking.status = data.status;
            }
            await updatedBooking.save()
            return updatedBooking;
        } catch (error) {
            if(error.name=='SequielizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot update Booking',
                'There was some error updating a booking. Please try again later.',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    } 
}

module.exports = BookingRepository;