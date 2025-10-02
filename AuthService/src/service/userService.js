const { JWT_KEY } = require("../config/serverConfig");
const UserRepository = require("../repository/userRepository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require("../models/user");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong on the service layer.");
      throw { error };
    }
  }

  async signIn(email, plainPassword) {
    try {
      const user = await this.userRepository.getByEmail(email);
      const passwordsMatch = this.checkPassword(plainPassword, user.password);
      if (!passwordsMatch) {
        console.log("Wrong password.");
        throw { err: "Wrong password" };
      }

      const newJWT = this.createToken({ email: user.email, id: user.id });
      return newJWT;
    } catch (error) {
      console.log("Something went wrong on the service layer.");
      throw { error };
    }
  }

  async destroy(data) {
    try {
      const response = await this.userRepository.destroy(data);
      return response;
    } catch (error) {
      console.log("Something went wrong on the servie layer.");
      throw { error };
    }
  }

  async getUser(userId) {
    try {
      const user = await this.userRepository.getById(userId);
      return user;
    } catch (error) {
      console.log("Something went wrong on the servie layer.");
      throw { error };
    }
  }
  
  async isAuthenticated(token){
    try {
      const response = this.verifyToken(token);
      if(!response){
        throw{err:"Token not verified."};
      }
      const user = await this.userRepository.getById(response.id);
      if(!user){
        throw{err:"No user found."};
      }
      return user.id;
    } catch (error) {
      throw {error}
    }
  }

  createToken(user) {
    try {
      const token = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return token;
    } catch (error) {
      console.log("Something went wrong while creating the token.");
      throw { error };
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  checkPassword(userInputPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPassword, encryptedPassword);
    } catch (error) {
      console.log(error);
    }
  }

  async isAdmin(userId){
    try {
      return this.userRepository.isAdmin(userId);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = UserService;
