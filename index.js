const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const conection = mysql.createConnection({
    host: 'db',
    user: 'user',
    password: 'password',
    database: 'testdb'
});

conection.connect(err => {
    if(err){
        console.error('Error conectando a la BD', err)
        process.exit(1);
    }
    console.log('Conectado a la BD')
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).send('Error executing query');
        } else {
            res.json(results);
        }
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});