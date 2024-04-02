const express = require('express');
const createController = require("./controller")

const router = express();

router.post('/create', createController )


module.exports = {router}