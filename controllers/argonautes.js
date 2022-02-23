const models = require("../models");

exports.createArgonaute = (req, res) => {
  const newArgonaute = models.Argonautes.create({
    name: req.body.name,
  });
  res.status(201).json({
    message: `Votre compte est bien créé ${newArgonaute.name} !`,
  });
};
exports.getAllArgonautes = async (req, res) => {
  // on envoie tous les users sauf admin
  try {
    const argonautes = await models.Argonautes.findAll({
      attributes: ["name", "id"],
    });
    res.status(200).send(argonautes);
  } catch (error) {
    return res.status(500).send({ error: "Erreur serveur" });
  }
};
exports.deleteArgonaute = (req, res) => {
  try {
    const id = req.params.id;
    {
      models.Argonautes.destroy({ where: { id: id } }); // on supprime le compte
      res.status(200).json({ messageRetour: "Argonautesupprimé" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Erreur serveur" });
  }
};
exports.updateArgonaute = (req, res) => {
  const id = req.params.id;

  models.Argonautes.update(
    {
      name: req.body.name,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((argonaute) => {
      res
        .status(201)
        .json({ message: "Argonaute successfully updated", argonaute });
    })
    .catch((err) => console.log(err));
};
