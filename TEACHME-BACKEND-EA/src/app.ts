import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes';
import asignaturaRoutes from './routes/asignaturaRoutes';
import etiquetaRoutes from './routes/etiquetaRoutes';


const app = express();
const PORT = 3000;

// Aplica el middleware CORS
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/ejercicio1')
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('No se pudo conectar a MongoDB...', err));

// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/asignaturas', asignaturaRoutes);
app.use('/api/etiquetas', etiquetaRoutes);

export default app;
