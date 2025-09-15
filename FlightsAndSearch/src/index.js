const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');// dotenv package used and imported here
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () =>{
    //create an express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    });

};

setupAndStartServer();