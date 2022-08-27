const cavaleirosService = require('../services/cavaleiros.service');

const findAllCavaleirosController = (req, res) => {
    const allCavaleiros = cavaleirosService.findAllCavaleirosService();
    res.send(allCavaleiros);
};

const findByIdcavaleiroController = (req, res) => {
    const idParam = Number(req.params.id);
    const escolhaCavaleiro = cavaleirosService.findByIdCavaleirosService(idParam);
    res.send(escolhaCavaleiro);
};

const createCavaleirosController = (req, res) => {
    const cavaleiro = req.body; // o body vem através do thunderclient
    const newCavaleiro = cavaleirosService.createCavaleiroService(cavaleiro); // faço um const newCavaleiro que chamo o service, e vai enviar a cavaleiro novo e retorna o newCavaleiro
    res.send(newCavaleiro);
};

const updateCavaleirosController = (req, res) => {
    const idParam = Number(req.params.id);
    const cavaleiroEdit = req.body;
    const updatedCavaleiro = cavaleirosService.updateCavaleiroService(idParam, cavaleiroEdit);
    res.send(updatedCavaleiro);
}

const deleteCavaleiroController = (req, res) => {
    const idParam = req.params.id;
    cavaleirosService.deleteCavaleiroService(idParam);
    res.send({ message: 'Cavaleiro deletado com sucesso!'})
    
}


module.exports = {
    findAllCavaleirosController,
    findByIdcavaleiroController,
    createCavaleirosController,
    updateCavaleirosController,
    deleteCavaleiroController
};
