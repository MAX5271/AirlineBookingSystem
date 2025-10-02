const { JWT_KEY } = require("../config/serverConfig");
const UserRepository = require("../repository/userRepository");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserService {
  constructor() {
    this.UserRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.UserRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong on the service layer.");
      throw { error };
    }
  }
  async destroy(data) {
    try {
      const response = await this.UserRepository.destroy(data);
      return response;
    } catch (error) {
      console.log("Something went wrong on the servie layer.");
      throw { error };
    }
  }

  async getUser(userId) {
    try {
      const user = await this.UserRepository.getById(userId);
      return user;
    } catch (error) {
      console.log("Something went wrong on the servie layer.");
      throw { error };
    }
  }

  getToken(user){
    try {
        const token = jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
        return token;
    } catch (error) {
        console.log("Something went wrong while creating the token.")
        throw {error};
    }
  }

  verifyToken(token){
    try {
        const response = jwt.verify(token,JWT_KEY);
        return response;
    } catch (error) {
        console.log(error);
    }
  }

  checkPassword(userInputPassword,encryptedPassword){
    try {
      return bcrypt.compareSync(userInputPassword,encryptedPassword);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = UserService;
