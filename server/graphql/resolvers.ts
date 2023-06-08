import Receta from '../db/models/recetasModel';
import { RecetasType } from '../typings/recetas';

const resolvers = {
  Query: {
    getAllRecetas: async () => {
      try {
        const recetas = await Receta.find();
        return recetas;
      } catch (error) {
        throw new Error('Error al obtener las recetas');
      }
    },
  },
  Mutation: {
    createReceta: async (_ :any, { nombre, ingredientes }:RecetasType) => {
      const nuevaReceta = new Receta({
        nombre,
        ingredientes,
      });

      try {
        const recetaGuardada = await nuevaReceta.save();
        return recetaGuardada;
      } catch (error) {
        throw new Error('Error al guardar la receta');
      }
    },
  },
};

export default resolvers;
