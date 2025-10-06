const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const apiRoutes = require('./routes/index');
const { sendBasicEmail } = require('./service/emailService');
const cron = require('node-cron');

const startServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

  app.listen(PORT,()=>{
    console.log(`Server has started on the port ${PORT}`);
    // sendBasicEmail(
    //   'support@admin.com',
    //   'airlinebookingproject420@gmail.com',
    //   'This is a test email',
    //   'I hope you like the support'
    // );
  });
  // cron.schedule('* * * * *', () => {
  //   console.log('running a task every minute');
  // });
};

startServer();
