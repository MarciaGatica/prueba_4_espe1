import express from 'express';
import {
    obtenerUnUsuario,listarUsuarios
} from '../controllers/usuario.controller.js';

const usuarioRouter = express.Router();

usuarioRouter.get('/', listarUsuarios);
usuarioRouter.get('/:usuarioId', obtenerUnUsuario);
//usuarioRouter.post('/', crearProducto);
//usuarioRouter.delete('/:productoId', borrarProducto);
//usuarioRouter.put('/:productoId', editarProducto);

export default usuarioRouter;
