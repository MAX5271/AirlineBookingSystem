const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const apiRoutes = require('./routes/index');
// const { sendBasicEmail } = require('./service/emailService');

const TicketController = require('./controller/ticketController');

const jobs = require('./utils/job');

const startServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.use('/api',apiRoutes);

  app.post('/api/v1/tickets',TicketController.create);

  app.listen(PORT,()=>{
    console.log(`Server has started on the port ${PORT}`);
    
  });
  jobs();
  // cron.schedule('* * * * *', () => {
  //   console.log('running a task every minute');
  // });
};

startServer();
