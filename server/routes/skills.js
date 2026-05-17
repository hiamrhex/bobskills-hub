import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = Router();

router.get('/', (req, res) => {
  try {
    const skills = JSON.parse(
      readFileSync(path.join(__dirname, '../data/skills.json'), 'utf-8')
    );
    const { search, category } = req.query;
    
    // Input validation
    if (search && typeof search !== 'string') {
      return res.status(400).json({ error: 'Invalid search parameter' });
    }
    if (category && typeof category !== 'string') {
      return res.status(400).json({ error: 'Invalid category parameter' });
    }
    
    let result = skills;
    if (category && category !== 'All')
      result = result.filter(s => s.category === category);
    if (search)
      result = result.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase())
      );
    res.json(result);
  } catch (error) {
    console.error('Error reading skills:', error.message);
    res.status(500).json({ error: 'Failed to load skills' });
  }
});

export default router;