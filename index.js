const express = require('express');
const path = require('path')
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))


  // res.status(200).json({ notes: 1 });
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))


  // res.status(200).json({ notes: 1 });
});

app.get('/api/notes', (req, res) => {
  fs.readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/api/notes', (req, res) => {




  res.status(200).json();
});


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
