const { Airport } = require("../models/index");
const { Op, where } = require("sequelize");
class AirportRepository {
  async createAirport(name, address, cityId) {
    try {
      const airport = await Airport.create({
        name: name,
        address: address,
        cityId: cityId,
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
      if (filter) {
        const airport = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter,
            },
          },
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
