/**
 * AddObjetoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const joi = require('joi');

module.exports = {

  addObjeto: async function (req, res) {

    try {

      const schema = joi.object().keys({
        nombre: joi.string().required(),
        descripcion: joi.string().required(),
        imagen: joi.string().required(),
      });

      const { nombre, descripcion, imagen } = await schema.validateAsync(req.body);
      const objeto = await Objeto.create({ nombre, descripcion, imagen }).fetch();
      return res.ok(objeto);

    } catch (error) {
      return res.badRequest(error);
    }
  }

};

