require('./config/config');
// import express
const express = require('express');
// init server
const app = express();
// body parser
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies

// routing
app.get('/', (req, res) => {
   res.json('Hola mundo');
});
app.get('/usuario', (req, res) => {
   res.json('get usuario');
});
app.post('/usuario', (req, res) => {
   const body = req.query;
   if (!body.nombre) {
      res.status(400).send({
         ok: false,
         message: 'Nombre necesario',
      });
   } else {
      res.json({ persona: body });
   }
});
app.put('/usuario/:id', (req, res) => {
   const id = req.params.id;
   const usuario = 'Usuario';
   res.json({ id, usuario });
});
app.delete('/usuario', (req, res) => {
   res.json(`delete usuario`);
});
// call the server
app.listen(process.env.PORT, () => {
   console.log(`Escuchando puerto:${process.env.PORT}`);
});
