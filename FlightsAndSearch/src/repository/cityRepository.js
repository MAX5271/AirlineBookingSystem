const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = City.create({ name: name });
    } catch (error) {
      throw { error };
    }
  }
  async deleteCity({ cityId }) {
    try {
      City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw { error };
    }
  }
  async updateCity({name, cityId }) {
    try {
      await City.update(
        {
          name: name,
        },
        {
          where: {
            id: cityId,
          },
        }
      );
      return City;
    } catch (error) {
      throw { error };
    }
  }
  async getCity({cityId}){
    try {
        const city = await City.findByPk(cityId);
        return city;
    } catch (error) {
        throw {error}
    }
  }
}

module.exports = CityRepository;
