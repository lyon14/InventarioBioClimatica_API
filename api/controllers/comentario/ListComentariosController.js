/**
 * ListComentariosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  listComentarios: async function (req, res) {
    try {
      const comentarios = await Comentario.find();
      return res.ok(comentarios);
    } catch (error) {
      return res.badRequest(error);
    }
  }

};

