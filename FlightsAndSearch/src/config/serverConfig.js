const dotenv = require('dotenv');// For enviromental variables

dotenv.config();

module.exports={
    PORT : process.env.PORT
};