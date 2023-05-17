const express = require('express');
const cors = require('cors');
const { logger } = require('./middleware/logger');
const { validator } = require('./middleware/validator');
const { error404 } = require('./errorhandlers/404');
const { error500 } = require('./errorhandlers/500');

const server = express();
server.use(express.json());
//Midleware 
server.use(cors());

server.use(logger);

//Routes
server.get('/person/:name', validator, (req, res, next) => {
  res.status(200).send(`{ name: ${req.params.name} }`);
});


//Eror Handling
server.use(error404, error500);

const start = (port) => server.listen(port, () => console.log('server listening on:', port));


module.exports = { start, server };