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


export const asignarUsuarioAEtiquetaID = async (_id: string, usuarioId: string) => {
    try {
        // Verificar si el ID de usuario es válido
        if (!Types.ObjectId.isValid(usuarioId)) {
            throw new Error('ID de usuario no válido');
        }

        // Buscar la etiqueta por su ID
        const etiqueta = await Etiqueta.findById(_id);
        if (!etiqueta) {
            throw new Error('Etiqueta no encontrada');
        }

        // Buscar el usuario por su ID
        const usuario = await Usuario.findById(usuarioId);
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

    } catch (error) {
        // Si ocurre un error, lanzar el error
        if (error instanceof Error) {
            throw new Error(`Error al asignar usuario a etiqueta: ${error.message}`);
        } else {
            throw new Error('Error desconocido al asignar usuario a etiqueta');
        }
    }
};


export const asignarUsuarioAEtiquetaPorId = async (etiquetaId: string, usuarioNombre: string) => {
    // Verificar si el ID de la etiqueta es válido
    if (!Types.ObjectId.isValid(etiquetaId)) {
      throw new Error('ID de etiqueta no válido');
    }
  
    // Buscar la etiqueta por su _id
    const etiqueta = await Etiqueta.findById(etiquetaId);
    if (!etiqueta) {
      throw new Error('Etiqueta no encontrada');
    }
  
    // Buscar el usuario por su nombre
    const usuario = await Usuario.findOne({ nombre: usuarioNombre });
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
  