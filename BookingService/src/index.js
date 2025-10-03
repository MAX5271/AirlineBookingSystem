const express =  require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const db = require('./models/index');

const app = express();

const startServer = async ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',);

    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`);
    });

    if(process.env.DB_SYNC){
        db.sequelize.sync({alter:true});
    }

}

startServer();