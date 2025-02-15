import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173', // Change to the specific origin you want to allow
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true, // Allow cookies if needed
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/',(req,res)=>{
  res.send('Hello World')
})
app.use('/user', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {console.log(`Database connected: ${conn.connection.host}`);})
    .catch((err) => {console.log(`Error in connected db: ${err.message}`);})
});