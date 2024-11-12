import mongoose from 'mongoose';


const etiquetaSchema = new mongoose.Schema({
    nUsuario: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
    colorFav: { type: String },
    descripcion: { type: String }
}, { versionKey: false

});

const Etiqueta = mongoose.model('etiqueta', etiquetaSchema);
export default Etiqueta;

