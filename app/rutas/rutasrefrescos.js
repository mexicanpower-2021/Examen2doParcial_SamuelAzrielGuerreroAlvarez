const express = require('express');

const controladorrefrescos = require('../controlador/controladorrefrescos');

const Router = express.Router();

Router.get('/',controladorrefrescos.index)
.post('/', controladorrefrescos.crear)
.get('/:key/:value',controladorrefrescos.buscar, controladorrefrescos.mostrar)
.put('/:key/:value',controladorrefrescos.buscar,controladorrefrescos.actualizar)
.delete('/:key/:value',controladorrefrescos.buscar, controladorrefrescos.eliminar);



module.exports = Router;
