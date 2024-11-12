import { Router } from 'express';
import { crearEtiqueta
    , listarEtiquetas
    , listarEtiquetasPopulate
    , actualizarEtiquetaPorId
    , actualizarEtiquetaPorNombre
    , eliminarEtiquetaPorId
    , eliminarEtiquetaPorNombre
    , asignarUsuarioAEtiquetaPorId
   
 } from '../controller/etiquetaController';

const router = Router();


router.get('/',listarEtiquetas);
router.get('/populate',listarEtiquetasPopulate);

router.post('/', crearEtiqueta);

router.put('/:id/usuario/:nombre', asignarUsuarioAEtiquetaPorId);

router.put('/:id', actualizarEtiquetaPorId);
router.put('/nombre/:nombre', actualizarEtiquetaPorNombre);

router.delete('/:id', eliminarEtiquetaPorId);
router.delete('/nombre/:nombre', eliminarEtiquetaPorNombre);

export default router;
