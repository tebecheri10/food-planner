import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Receta {
    _id: ID!
    nombre: String!
    ingredientes: [Ingrediente!]!
  }

  type Ingrediente {
    nombreIngrediente: String!
    cantidad: Int!
  }

  type Query {
    getAllRecetas: [Receta!]!
  }

  type Mutation {
    createReceta(nombre: String!, ingredientes: [IngredienteInput!]!): Receta!
  }

  input IngredienteInput {
    nombreIngrediente: String!
    cantidad: Int!
  }
`;

export default typeDefs;
