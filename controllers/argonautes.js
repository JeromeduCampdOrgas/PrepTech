const models = require("../models");

exports.createArgonaute = (req, res) => {
  console.log(req.body);
  const newArgonaute = models.Argonautes.create({
    name: req.body.name,
  });
  res.status(201).json({
    message: `Votre compte est bien créé ${newArgonaute.name} !`,
  });
};
