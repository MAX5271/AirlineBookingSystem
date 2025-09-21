const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(name, address, cityId) {
    try {
      const airport = await this.airportRepository.createAirport(
        name,
        address,
        cityId
      );
    } catch (error) {
      console.log(error);
    }
  }
  async getAirport(cityId) {
    try {
      const airport = await this.airportRepository.getAirport(cityId);
      return airport;
    } catch (error) {
      console.log(error);
    }
  }
  async getAllAirports(filter) {
    try {
      const airport = await this.airportRepository.getAllAirports(filter.name);
      return airport;
    } catch (error) {
      console.log(error);
    }
  }
  async updateAirport(data, cityId) {
    try {
      const airport = await this.airportRepository.updateAirport(data, cityId);
      return airport;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAirport(cityId) {
    try {
      const airport = await this.airportRepository.deleteAirport(cityId);
      return airport;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AirportService;
