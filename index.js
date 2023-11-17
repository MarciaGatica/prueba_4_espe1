import express from 'express';

import productoRouter from './src/routes/producto.router.js';
import usuarioRouter from './src/routes/usuario.router.js';

import { PORT } from './src/config/environment.js';
import connectDB from './src/config/mongo.js';

const app = express();

app.use(express.json());

app.use('/productos', productoRouter);

app.use('/usuarios', usuarioRouter);



async function startServer() {
  const isConnected = await connectDB();
  if (isConnected) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
}

startServer();
