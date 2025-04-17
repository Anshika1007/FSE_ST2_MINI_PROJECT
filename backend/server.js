import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(express.json());
app.use('/api/contacts', contactRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
