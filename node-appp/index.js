const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

const dbConfig = {
  host: 'mysql-db',
  user: 'root',
  password: 'root',
  database: 'people_db',
};

app.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute('INSERT INTO people(name) VALUES (?)', ['Full Cycle']);

    const [rows] = await connection.query('SELECT name FROM people');
    const namesList = rows.map(row => `<li>${row.name}</li>`).join('');

    res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`);
    connection.end();
  } catch (error) {
    console.error('Erro na aplicação:', error);
    res.status(500).send('Erro na aplicação.');
  }
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
