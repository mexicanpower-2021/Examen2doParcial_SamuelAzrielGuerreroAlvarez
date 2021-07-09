const { Router } = require('express');

const express = require('express');

const rutasvino=require('./rutas/rutasvino');
const rutasrefresco=require('./rutas/rutasrefresco');






const app = express();
app.use(express.urlencoded({extended: false }));
app.use(express.json());
app.use('/vinos', rutasvino);
app.use('/refrescos', rutasrefresco);

module.exports = app;
