// mock-api/server.js
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js'; // include `.js` in ESM

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: false,

}))



app.use(express.json());



app.use('/api/users', userRoutes);

const PORT = 9000;
app.listen(PORT, () => console.log(`Mock server running on http://localhost:${PORT}`));