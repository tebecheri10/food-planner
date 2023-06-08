import mongoose from 'mongoose';

const ingredienteSchema = new mongoose.Schema({
  nombreIngrediente: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  }
});

const recetaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  ingredientes: [ingredienteSchema]
});

const Receta = mongoose.model('Receta', recetaSchema);

export default Receta;
