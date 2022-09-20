const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const cavaleiro = req.body;

  if (
    !cavaleiro ||
    !cavaleiro.nome ||
    !cavaleiro.idade ||
    !cavaleiro.descricao ||
    !cavaleiro.foto ||
    !cavaleiro.habilidade
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do cavaleiro!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
