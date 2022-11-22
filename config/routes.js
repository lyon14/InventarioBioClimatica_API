/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'POST /user/signup': 'user/SignUpController.signup',
  'POST /user/login': 'user/LoginController.login',
  'POST /objeto/add': 'objeto/AddObjetoController.addObjeto',
  'GET /objeto/list': 'objeto/ListObjetosController.listObjetos',
  'POST /comentario/add': 'comentario/AddComentarioController.addComentario',
  'GET /comentario/list': 'comentario/ListComentariosController.listComentarios',
};
