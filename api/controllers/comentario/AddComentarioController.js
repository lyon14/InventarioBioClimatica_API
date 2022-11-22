/**
 * AddComentarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const joi = require('joi');

module.exports = {

  addComentario: async function (req, res) {
    try {
      const schema = joi.object().keys({
        texto: joi.string().required(),
        id_objeto: joi.number().required(),
        id_usuario: joi.number().required(),
      });
      const { texto, id_objeto, id_usuario } = await schema.validateAsync(req.body);
      const comentario = await Comentario.create({ texto, id_objeto, id_usuario }).fetch();
      return res.ok(comentario);
    } catch (error) {
      return res.badRequest(error);
    }
  }

};

