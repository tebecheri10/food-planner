import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

// realiza la conexión a la base de datos
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tl6xubq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
  });
  
  connection.on('error', (err: any) => {
    console.error(`Error connecting to MongoDB Atlas: ${err.message}`);
  });
  
  connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB Atlas');
  });
// exporta la conexión para poder usarla en otros archivos
export default connection
