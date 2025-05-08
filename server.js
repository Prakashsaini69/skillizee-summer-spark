// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/submit', async (req, res) => {
  const googleScriptUrl = 'https://script.google.com/a/macros/cambridgecourtgroup.com/s/AKfycbyj9_27CrQXVcjIVps3laySUkZlyseao80kasOCNRqwKnA7jv5Nlc0JNoRqmh6AQDIbIg/exec';

  try {
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
