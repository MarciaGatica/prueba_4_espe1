import productoModel from '../models/producto.model.js';


async function crearProducto(request, response) {
    try {
        const body = request.body;
        const camposRequeridos = ['nombre_producto', 'precio', 'stock', 'foto_producto'];

        for (const campo of camposRequeridos) {
            if (!body[campo]) {
                return response.status(400).send({
                    error: `El campo '${campo}' es obligatorio. Por favor, proporcione todos los campos requeridos.`,
                });
            }
        }
        const producto = await productoModel.create({
            nombre_producto: body.nombre_producto,
            precio: body.precio,
            stock: body.stock,
            foto_producto: body.foto_producto,
        });

        return response.status(201).send({
            producto,
            message: 'Producto creado exitosamente.',
        });
    } catch (error) {
        console.error('Error al crear producto:', error);
        return response.status(500).send({
            error: 'Hubo un error al crear el producto. Por favor, inténtelo de nuevo.',
        });
    }
}


async function listarProductos(request, response) {
    const page = request.query.page;
  
    const productos = await productoModel.find({});
  
    return response.send({ productos });
  }

  async function borrarProducto(request, response) {
    try {
        const productoId = request.params.productoId;
        const producto = await productoModel.findById(productoId);

        if (!producto) {
            return response.status(404).send({
                error: 'Producto no encontrado. No se realizó ninguna operación.',
            });
        }
        await productoModel.deleteOne({ _id: productoId });

        return response.status(200).send({
            success: true,
            message: 'Producto eliminado exitosamente.',
        });
    } catch (error) {
        console.error('Error al borrar producto:', error);
        return response.status(500).send({
            error: 'Hubo un error al borrar el producto. Por favor, inténtelo de nuevo.',
        });
    }
}
  async function editarProducto(request, response) {
    const productoId = request.params.productoId;
  
    const body = request.body;
  
    const producto = await productoModel.updateOne(
      { _id: productoId },
      {
        ...body,
      },
      { new: true }
    );
  
    return response.send({ producto });
  }

  async function obtenerUnProducto(request, response) {
    try {
      const productoId = request.params.productoId;
  
      const producto = await productoModel.findById(productoId);
  
      if (!producto) {
        return response.status(404).send({ error: 'El producto no existe' });
      }
  
      return response.send({ producto });
    } catch (error) {
      response.status(500).send({ error });
    }
  }

export {  crearProducto, listarProductos, borrarProducto, editarProducto, obtenerUnProducto };
