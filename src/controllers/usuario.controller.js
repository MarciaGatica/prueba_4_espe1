import usuarioModel from '../models/usuario.model.js';

  async function obtenerUnUsuario(request, response) {
    try {
      const usuarioId = request.params.usuarioId;
  
      const usuario = await usuarioModel.findById(usuarioId);
  
      if (!usuario) {
        return response.status(404).send({ error: 'El usuario no existe' });
      }
  
      return response.send({ usuario });
    } catch (error) {
      response.status(500).send({ error });
    }
  }
  async function listarUsuarios(request, response) {
    const page = request.query.page;
  
    const usuarios = await usuarioModel.find({});
  
    return response.send({ usuarios });
  }

export {obtenerUnUsuario ,listarUsuarios};
