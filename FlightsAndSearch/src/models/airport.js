"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: "cityId",
        onDelete: "CASCADE", //on deleting a city, this will delete all the corresponding airports present in the city.
      });
    }
  }
  Airport.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      address: DataTypes.STRING,
      cityId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Airport",
    }
  );
  return Airport;
};
