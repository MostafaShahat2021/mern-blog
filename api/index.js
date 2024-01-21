import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import aouthRoutes from './routes/aouth.route.js';

const app = express();
app.use(express.json());
dotenv.config();

try {
  mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
  });
} catch (err) {
  console.log(err);
}

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} http://localhost:3000`);
});

app.use('/api/user', userRoutes);

app.use('/api/aouth', aouthRoutes);
