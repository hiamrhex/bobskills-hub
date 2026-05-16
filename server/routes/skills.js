import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = Router();

router.get('/', (req, res) => {
  const skills = JSON.parse(
    readFileSync(path.join(__dirname, '../data/skills.json'), 'utf-8')
  );
  const { search, category } = req.query;
  let result = skills;
  if (category && category !== 'All')
    result = result.filter(s => s.category === category);
  if (search)
    result = result.filter(s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase())
    );
  res.json(result);
});

export default router;