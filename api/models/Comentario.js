/**
 * Comentario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    texto: {
      type: 'string',
    },
    id_objeto: {
      type: 'number',
    },
    id_usuario: {
      type: 'number',
    }
  },
};

