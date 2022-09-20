const route = require('express').Router(); // eu trouxe o require do express
const controllerCavaleiros = require('../controllers/cavaleiros.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const {
  validId,
  validObjectBody,
} = require('../middlewares/cavaleiro.middleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument))

route.get('/all-cavaleiros', controllerCavaleiros.findAllCavaleirosController);
route.get(
  '/one-cavaleiro/:id',
  validId,
  controllerCavaleiros.findByIdcavaleiroController,
);
route.post(
  '/create-cavaleiro',
  validObjectBody,
  controllerCavaleiros.createCavaleirosController,
);
route.put(
  '/update-cavaleiro/:id',
  validId,
  validObjectBody,
  controllerCavaleiros.updateCavaleirosController,
);
route.delete(
  '/delete-cavaleiro/:id',
  validId,
  controllerCavaleiros.deleteCavaleiroController,
);

module.exports = route;
