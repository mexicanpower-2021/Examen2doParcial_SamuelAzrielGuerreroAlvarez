const { Router } = require('express');

const express = require('express');

const rutasrefresco=require('./rutas/rutasrefresco');






const apps = express();
apps.use(express.urlencoded({extended: false }));
apps.use(express.json());
apps.use('/refrescos', rutasrefresco);

module.exports = apps;
