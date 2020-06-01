import express from 'express';

const app = express();

app.get('/users', (request, response) =>{
    console.log('Listagem de Usuarios');
    response.json([
        'Diego',
        'Michael',
        'Robson',
        'Daniel'
    ]);
});

app.listen(3333);