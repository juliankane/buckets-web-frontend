import express from 'express';
import authRoutes from './routes/authRoutes';


const app = express();
const port = 3000;

app.use(express.json());

// Mount all auth routes at /api/auth
app.use('/api/auth', authRoutes);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
