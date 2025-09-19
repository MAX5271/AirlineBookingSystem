const {CityRepository} =require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();// here cityRepository is a variable and we have attached it to `this` which enables us to use it anywhere in the class which won't happen if we just make a random variable.
    }
    async createCity(name) {
        try {
          const city = await this.cityRepository.createCity(name);
          return city;
        } catch (error) {
          throw { error };
        }
      }
      async deleteCity( cityId ) {
        try {
          const response = await this.cityRepository.deleteCity(cityId);
          return response;
        } catch (error) {
          throw { error };
        }
      }
      async updateCity(name, cityId ) {
        try{
            const city = await this.cityRepository.updateCity(name,cityId);
            return city;
        } catch (error) {
          throw { error };
        }
    }
      
      async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            throw {error}
        }
      }

      async getAllCities(filter){
        try {
            const cities = await this.cityRepository.getAllCities(filter);
            return cities;
        } catch (error) {
            throw {error}
        }
      }
};

module.exports=CityService;