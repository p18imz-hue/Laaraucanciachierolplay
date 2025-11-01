const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper to read JSON files
function readJSON(relPath) {
  const p = path.join(__dirname, relPath);
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (err) {
    return null;
  }
}

// API: tienda
app.get('/api/shop', (req, res) => {
  const data = readJSON('data/shop.json') || [];
  res.json(data);
});

// API: trabajos / sueldos
app.get('/api/jobs', (req, res) => {
  const data = readJSON('data/jobs.json') || [];
  res.json(data);
});

// API: enlaces
app.get('/api/links', (req, res) => {
  const data = readJSON('data/links.json') || [];
  res.json(data);
});

// Demo endpoint para "comprar" - solo simulado (no persistente)
app.post('/api/buy', (req, res) => {
  const { itemId, username } = req.body || {};
  const shop = readJSON('data/shop.json') || [];
  const item = shop.find(i => i.id === itemId);
  if (!item) return res.status(404).json({ error: 'Item no encontrado' });
  // Aquí solo devolvemos confirmación. Reemplaza por lógica real (DB, pagos).
  return res.json({ ok: true, message: `Usuario ${username || 'anon'} compró ${item.name}`, item });
});

app.listen(PORT, () => {
  console.log(`Portal corriendo en http://localhost:${PORT}`);
});