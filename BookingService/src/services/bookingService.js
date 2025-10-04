const axios = require('axios');
const {FLIGHT_SERVICE_PATH} = require('../config/serverConfig');

const { BookingRepository } = require('../repository/index');
const ServiceError = require('../utils/errors/service-error');
class BookingService{
    constructor(){
        this.bookingRepository = new BookingRepository;
    }

    async createBooking(data){
        try {
            
            const flightId = data.flightId;
            const getFlightUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const flight = await axios.get(getFlightUrl);
            const flightData = flight.data.data;
            let flightPrice = flightData.price;
            if(data.noOfSeats > flightData.totalSeats){
                throw new ServiceError('Something went wrong in the booking process','Insufficient seats in the flights.');
            }
            const totalCost = flightPrice * data.noOfSeats;
            const bookingPayload = {...data,totalCost};
            const booking = await this.bookingRepository.create(bookingPayload);
            const updateFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
            await axios.patch(updateFlightRequestURL,{totalSeats: flightData.totalSeats-booking.noOfSeats});
            const finalBooking = await this.bookingRepository.updateBooking(booking.id,{status:"BOOKED"});
            return finalBooking;
        } catch (error) {
            if(error.name=='RepositoryError'||error.name=='ValidationError'){
                throw error;
            }
            throw new ServiceError();
        }
        
    }
}

module.exports = BookingService;