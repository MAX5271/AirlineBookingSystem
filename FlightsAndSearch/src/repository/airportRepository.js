const { Airport } = require('../models/index');

class AirportRepository {
  async createAirport(name,address,cityId) {
    try {
        const airport = await Airport.create({
            name:name,
            address:address,
            cityId:cityId
        }); 
        console.log(airport);
        return airport;
    } catch (error) {
      console.log(error);
    }
  }

  async getAirport(cityId) {
    try {
        const airport = await Airport.findByPk(cityId);
        return airport;
    } catch (error) {
      console.log(error);
    }
  }

  async updateAirport(data,cityId) {
    try {
        const airport = await Airport.findByPk(cityId);
        airport.name=data.name;
        airport.address=data.address;
        await airport.save();
        return airport;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAirport(cityId) {
    try {
        await Airport.destroy({
            where:{
                id:cityId
            }
        });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AirportRepository;
