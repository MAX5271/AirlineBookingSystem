const { where } = require("sequelize");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create() {
    try {
        const result = await this.model.create(data);
    } catch (error) {
      console.log("Something went wrong in the crud repo");
    }
  }

  async destroy(modelId) {
    try {
        const result = await this.model.destroy({
            where:{
                id:modelId
            }
        })
        return true;
    } catch (error) {
      console.log("Something went wrong in the crud repo");
    }
  }

  async get(modelId) {
    try {   
        const result = await this.model.findByPk(modelId);
        return result;
    } catch (error) {
      console.log("Something went wrong in the crud repo");
    }
  }

  async getAll() {
    try {
        const result = await this.model.findAll();
        return result;
    } catch (error) {
      console.log("Something went wrong in the crud repo");
    }
  }

  async update(data,modelId) {
    try {
        const result = await this.model.update(data, {
          where: {
              id: modelId
          },
      
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in the crud repo");
    }
  }
}

module.exports = CrudRepository;
