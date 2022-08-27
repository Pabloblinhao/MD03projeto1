const route = require('express').Router();// eu trouxe o require do express


const controllerCavaleiros = require('../controllers/cavaleiros.controller')

route.get('/lista-cavaleiros', controllerCavaleiros.findAllCavaleirosController);
route.get('/cavaleiro/:id', controllerCavaleiros.findByIdcavaleiroController);
route.post('/create', controllerCavaleiros.createCavaleirosController);
route.put('/update/:id', controllerCavaleiros.updateCavaleirosController);
route.delete('/delete/:id', controllerCavaleiros.deleteCavaleiroController);

module.exports = route;