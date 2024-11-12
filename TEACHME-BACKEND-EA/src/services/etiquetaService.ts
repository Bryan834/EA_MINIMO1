import Etiqueta from '../models/etiqueta';
import Usuario from '../models/usuario';
import { Types } from 'mongoose';


///////////////////////////////CREAR ETIQUETA/////////////////////////////////////
export const crearEtiqueta = async (colorFav: string, descripcion: string) => {
    const etiqueta = new Etiqueta({ colorFav, descripcion });
    return await etiqueta.save();
};

export const listarEtiquetas = async () => {
    return await Etiqueta.find();
};

export const listarEtiquetasPopulate = async () => {
    return await Etiqueta.find().populate('usuarios');
    };


export const actualizarEtiquetaPorId = async (_id: string, datos: any) => {
    return await Etiqueta.findByIdAndUpdate(_id, datos, { new: true });
}

export const actualizarEtiquetaPorNombre = async (nombre: string, datos: any) => {
    return await Etiqueta.findOneAndUpdate({ nombre }, datos, { new: true });
}


export const eliminarEtiquetaPorId = async (_id: string) => {
    return await Etiqueta.findOneAndDelete({ _id });
}

export const eliminarEtiquetaPorNombre = async (nombre: string) => {
    return await Etiqueta.findOneAndDelete({ nombre });
}

// Asignar un usuario a una etiqueta por ID de la etiqueta y nombre del usuario
export const asignarUsuarioAEtiquetaPorId = async (_id: string, nombreUsuario: string) => {
    // Verificar si el ID de la etiqueta es válido
    if (!Types.ObjectId.isValid(_id)) {
        throw new Error('ID de etiqueta no válido');
    }

    // Buscar la etiqueta por su ID
    const etiqueta = await Etiqueta.findById(_id);
    if (!etiqueta) {
        throw new Error('Etiqueta no encontrada');
    }

    // Buscar el usuario por su nombre
    const usuario = await Usuario.findOne({ nombre: nombreUsuario });
    if (!usuario) {
        throw new Error('Usuario no encontrado');
    }

    // Verificar si el usuario ya está asignado a la etiqueta
    if (etiqueta.nUsuario.includes(usuario._id)) {
        throw new Error('El usuario ya está asignado a esta etiqueta');
    }

    // Asignar el usuario a la etiqueta
    etiqueta.nUsuario.push(usuario._id);

    // Guardar la etiqueta con el nuevo usuario asignado
    await etiqueta.save();

    return etiqueta; // Retorna la etiqueta actualizada
};