import { Router } from 'express';
import * as etiquetaController from '../controller/etiquetaController';

const router = Router();

/*----------------------------- RUTAS GET -----------------------------*/

router.get('/etiquetas', etiquetaController.listarEtiquetas);


router.get('/etiquetas/populate', etiquetaController.listarEtiquetasPopulate);

/*----------------------------- RUTAS POST -----------------------------*/

router.post('/etiquetas', etiquetaController.crearEtiqueta);


router.post('/etiquetas/:_id/asignar-usuario', etiquetaController.asignarUsuarioAEtiquetaID);

/*----------------------------- RUTAS PUT -----------------------------*/

router.put('/etiquetas/:_id', etiquetaController.actualizarEtiquetaPorId);


router.put('/etiquetas/nombre/:nombre', etiquetaController.actualizarEtiquetaPorNombre);

/*----------------------------- RUTAS DELETE -----------------------------*/

router.delete('/etiquetas/:_id', etiquetaController.eliminarEtiquetaPorId);


router.delete('/etiquetas/nombre/:nombre', etiquetaController.eliminarEtiquetaPorNombre);

export default router;
