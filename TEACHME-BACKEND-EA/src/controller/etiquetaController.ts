//dame el controlador de etiqueta a partir de etiquetaService.ts

import { Request, Response } from 'express';
import * as etiquetaService from '../services/etiquetaService';
import Etiqueta from '../models/etiqueta';
import exp from 'constants';

////////////CREAR ETIQUETA////////////////////////
export async function crearEtiqueta(req: Request, res: Response) {
    try {
        const {colorFav, descripcion } = req.body;
        const etiqueta = await etiquetaService.crearEtiqueta( colorFav, descripcion);
        console.log(etiqueta);
        res.status(201).json(etiqueta);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

////////////LISTAR ETIQUETAS////////////////////////
export async function listarEtiquetas(req: Request, res: Response) {
    try {
        const etiquetas = await etiquetaService.listarEtiquetas();
        res.json(etiquetas);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

////////////LISTAR ETIQUETAS CON POPULATE////////////////////////
export async function listarEtiquetasPopulate(req: Request, res: Response) {
    try {
        const etiquetas = await etiquetaService.listarEtiquetasPopulate();
        res.json(etiquetas);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

////////////ACTUALIZAR ETIQUETA POR ID////////////////////////
export async function actualizarEtiquetaPorId(req: Request, res: Response) {
    try {
        const { _id } = req.params;
        const datos = req.body;
        const etiqueta = await etiquetaService.actualizarEtiquetaPorId(_id, datos);
        res.json(etiqueta);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export async function actualizarEtiquetaPorNombre(req: Request, res: Response) {
    try {
        const { nombre } = req.params;
        const datos = req.body;
        const etiqueta = await etiquetaService.actualizarEtiquetaPorNombre(nombre, datos);
        res.json(etiqueta);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

////////////ELIMINAR ETIQUETA POR ID////////////////////////
export async function eliminarEtiquetaPorId(req: Request, res: Response) {
    try {
        const { _id } = req.params;
        const etiqueta = await etiquetaService.eliminarEtiquetaPorId(_id);
        res.json(etiqueta);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export async function eliminarEtiquetaPorNombre(req: Request, res: Response) {
    try {
        const { nombre } = req.params;
        const etiqueta = await etiquetaService.eliminarEtiquetaPorNombre(nombre);
        res.json(etiqueta);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

//asignar un usuario a una etiqueta dandole el nombre del usuario
export async function asignarUsuarioAEtiquetaID(req: Request, res: Response) {
    try {
        const { _id } = req.params;
        const { usuarioId } = req.body;
        const etiqueta = await etiquetaService.asignarUsuarioAEtiquetaID(_id, usuarioId);
        res.json(etiqueta);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}



