const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index');

router.use('/api',v1ApiRoutes);
module.exports=router;