import { Usuario } from "./usuario.model";

export interface Etiqueta {
    _id?: string; 
    nUsuario: Usuario[]; 
    colorFav: string; 
    descripcion: string; 
  }
  