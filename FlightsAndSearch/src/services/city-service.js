const {CityRepository} =require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }
    async createCity({ name }) {
        try {
          const city = await this.cityRepository.createCity(name);
          return city;
        } catch (error) {
          throw { error };
        }
      }
      async deleteCity({ cityId }) {
        try {
          const response = await this.cityRepository.deleteCity({cityId:cityId});
          return response;
        } catch (error) {
          throw { error };
        }
      }
      async updateCity({name, cityId }) {
        try{
            const response = await this.cityRepository.updateCity({name:name,cityId:cityId});
            return response;
        } catch (error) {
          throw { error };
        }
    }
      
      async getCity({cityId}){
        try {
            const city = await this.cityRepository.getCity({cityId:cityId});
            return city;
        } catch (error) {
            throw {error}
        }
      }
};