const app = require('./app/app');
const config = require('./app/configuracion/config');

const morgan = require('morgan');
const conexion = require('./app/configuracion/conexion');

conexion.connect();
app.use(morgan('dev'))

app.listen(config.PORT,function(erro){
    if(erro) return console.log(error);
    console.log(`servidor en el puerto ${config.PORT}`);
});







