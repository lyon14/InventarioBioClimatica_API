/**
 * ListObjetosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  listObjetos: async function (req, res) {
    try {
      const objetos = await Objeto.find();
      const id_objeto = objetos.map(objeto => objeto.id);
      const comentarios = await Comentario.find({ id_objeto });
      const id_usuario = comentarios.map(comentario => comentario.id_usuario);
      const usuarios = await Usuario.find({ id: id_usuario });
      const respuesta = objetos.map(objeto => {
        const comentariosObjeto = comentarios.filter(comentario => comentario.id_objeto === objeto.id);
        const comentariosObjetoConUsuario = comentariosObjeto.map(comentario => {
          const usuario = usuarios.find(usuario => usuario.id === comentario.id_usuario);
          return {
            ...comentario,
            usuario
          }
        });
        return {
          ...objeto,
          comentarios: comentariosObjetoConUsuario
        }
      })

      /*const respuesta = objetos.map(objeto => {
        const comentariosObjeto = comentarios.filter(comentario => comentario.id_objeto === objeto.id);
        return { ...objeto, comentarios: comentariosObjeto };
      });*/
      return res.ok(respuesta);
    } catch (error) {
      return res.badRequest(error);
    }
  }

};

