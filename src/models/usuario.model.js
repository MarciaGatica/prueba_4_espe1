import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nombre_usuario: {
        type: String,
        required: true,
    },
    clave: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    foto_producto: {
        type: String,
    },
}, {
    timestamps: true
});

const usuarioModel = mongoose.model('Usuario', usuarioSchema);

export default usuarioModel;