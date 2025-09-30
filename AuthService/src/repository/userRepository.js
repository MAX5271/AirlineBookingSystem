const e = require("express");
const { User } = require("../models/index");
const { where } = require("sequelize");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong on the repository layer.");
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      const user = await User.findByPk(userId);
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return user;
    } catch (error) {
      console.log("Something went wrong on the repository layer.");
      throw { error };
    }
  }
}

module.exports = UserRepository;
