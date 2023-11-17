import express from 'express';
import {
    crearProducto, listarProductos , borrarProducto, editarProducto, obtenerUnProducto
} from '../controllers/producto.controller.js';

const productoRouter = express.Router();

productoRouter.get('/', listarProductos);
productoRouter.get('/:productoId', obtenerUnProducto);
productoRouter.post('/', crearProducto);
productoRouter.delete('/:productoId', borrarProducto);
productoRouter.put('/:productoId', editarProducto);

export default productoRouter;
