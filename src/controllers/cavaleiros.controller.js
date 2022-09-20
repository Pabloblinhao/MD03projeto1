const cavaleirosService = require('../services/cavaleiros.service');
const mongoose = require('mongoose');

const findAllCavaleirosController = async (req, res) => {
  const allCavaleiros = await cavaleirosService.findAllCavaleirosService();

  if (allCavaleiros.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum cavaleiro cadastrado!' });
  }

  res.send(allCavaleiros);
};

const findByIdcavaleiroController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCavaleiro = await cavaleirosService.findByIdCavaleirosService(
    idParam,
  );

  if (!chosenCavaleiro) {
    return res.status(404).send({ message: 'Cavaleiro não encontrado!' });
  }
  res.send(chosenCavaleiro);
};

const createCavaleirosController = async (req, res) => {
  const cavaleiro = req.body; // o body vem através do thunderclient
  const newCavaleiro = await cavaleirosService.createCavaleiroService(
    cavaleiro,
  ); // faço um const newCavaleiro que chamo o service, e vai enviar a cavaleiro novo e retorna o newCavaleiro
  res.status(201).send(newCavaleiro);
};

const updateCavaleirosController = async (req, res) => {
  const idParam = req.params.id;
  const editCavaleiro = req.body;
  const updatedCavaleiro = await cavaleirosService.updateCavaleiroService(
    idParam,
    editCavaleiro,
  );
  res.send(updatedCavaleiro);
};

const deleteCavaleiroController = async (req, res) => {
  const idParam = req.params.id;
  await cavaleirosService.deleteCavaleiroService(idParam);
  res.send({ message: 'Cavaleiro deletado com sucesso!' });
};

module.exports = {
  findAllCavaleirosController,
  findByIdcavaleiroController,
  createCavaleirosController,
  updateCavaleirosController,
  deleteCavaleiroController,
};
