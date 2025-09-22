const { Airport } = require("../models/index");
const { Op, where } = require("sequelize");
class AirportRepository {
  async createAirport(data) {
    try {
      if(data.details){
        const airport = await Airport.bulkCreate(data.details);
        return airport;
      }
      const airport = await Airport.create({
        name: data.name,
        address: data.address,
        cityId: data.cityId,
      });
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

  async getAllAirports(filter) {
    try {
      if (filter.name) {
        const airport = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return airport;
      }else if(filter.id){
        const airport = await Airport.findAll({
          where:{
            cityId:filter.id
          }
        });
        return airport;
      }
      const airport = await Airport.findAll();
      return airport;
    } catch (error) {
      console.log(error);
    }
  }

  async updateAirport(data, cityId) {
    try {
      const airport = await Airport.findByPk(cityId);
      airport.name = data.name;
      airport.address = data.address;
      await airport.save();
      return airport;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAirport(cityId) {
    try {
      const airport = this.getAirport(cityId);
      await Airport.destroy({
        where: {
          id: cityId,
        },
      });
      return airport;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AirportRepository;
