// importar express
const express = require("express");
const path = require('path');   // 
const fs = require('fs/promises');

const jsonPath = path.resolve('data.json');
// instanciar express en app
const app = express();
// EJECUTA UNA FUNCION CUANDO SE DETECTA UNA PETICIÓN A LA RUTA '/'  con cualquier metodo http  (get, put, post, etc)
//app.all('/', (req, res) => {
// Middleware para leer json y que POST no marque indefined aunque lleve body
app.use(express.json());

app.get('/api/v1/tasks', async(req, res) => {
    const jsonFile = await fs.readFile(jsonPath, 'utf8');

    console.log('Bienvenido al server');
    
    //res.send(jsonFile); // cierra conexión cuando no hay envio em respuesta
    res.status(201).send(jsonFile)
});

app.post('/api/v1/tasks', (req,res) => {
    console.log(req.body);
    res.end();
});

app.put('/api/v1/tasks', (req,res) => {

});

app.patch('/api/v1/tasks', (req,res) => {

});

app.delete('/api/v1/tasks', (req,res) => {

});


app.listen(8080, () => {
    console.log('Servidor corriendo en puerto 8080');
});

