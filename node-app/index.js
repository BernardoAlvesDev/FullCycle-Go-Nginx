const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'mysql-db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'people_db',
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

app.get('/insert', (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).send('Nome é obrigatório.');
    }

    const query = 'INSERT INTO people (name) VALUES (?)';
    db.query(query, [name], (err, result) => {
        if (err) {
            console.error('Erro ao inserir no banco:', err);
            return res.status(500).send('Erro ao inserir no banco.');
        }
        res.send(`Usuário ${name} inserido com sucesso!`);
    });
});

app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});
