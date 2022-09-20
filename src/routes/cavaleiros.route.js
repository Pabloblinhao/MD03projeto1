const route = require('express').Router(); // eu trouxe o require do express
const controllerCavaleiros = require('../controllers/cavaleiros.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/cavaleiro.middleware');

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
