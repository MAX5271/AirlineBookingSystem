const UserRepository = require("../repository/userRepository");

class UserService{
    constructor(){
        this.UserRepository = new UserRepository();
    }

    async create(data){
            try {
                const user = await this.UserRepository.create(data);
                return user;
            } catch (error) {
                console.log("Something went wrong on the service layer.");
                throw {error};
            }
        }
    async destroy(data){
            try {
                const response = await this.UserRepository.destroy(data);
                return response;
            } catch (error) {
                console.log("Something went wrong on the servie layer.");
                throw {error};
            }
        }

        

}

module.exports=UserService;