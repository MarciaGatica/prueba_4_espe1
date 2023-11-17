import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre_producto: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        min: 0,
        required: true,
    },
    stock: {
        type: Number,
        min: 0,
        required: true,
    },
    foto_producto: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const productoModel = mongoose.model('Producto', productoSchema);

export default productoModel;