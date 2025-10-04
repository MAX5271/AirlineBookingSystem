const {FlightRepository,AirplaneRepository} = require('../repository/index');
const { compartTime } = require('../utils/helper');

class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(compartTime(data.arrivalTime,data.departureTime)){
                throw {error:'Arrival time can not be less then departure time.'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Error in Flights Repository layer.")
            throw error;
        }
    }

    async getAllFlightData(data){
        try {
           const flights = await this.flightRepository.getAllFlights(data);
           return flights;
        } catch (error) {
            console.log("Error in Flights Repository layer.")
            throw error;
        }
    }

    async getFlight(flightId){
        try {
           const flight = await this.flightRepository.getFlight(flightId);
           return flight;
        } catch (error) {
            console.log("Error in Flights Repository layer.")
            throw error;
        }
    }
}

module.exports = FlightService;