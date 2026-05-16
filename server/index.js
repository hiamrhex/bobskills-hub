import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import skillsRouter from './routes/skills.js';
import previewRouter from './routes/preview.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/skills', skillsRouter);
app.use('/api/preview', previewRouter);

app.listen(3001, () => console.log('✅ Server running on http://localhost:3001'));