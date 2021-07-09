const modelorefrescos = require('../modelos/modelorefrescos');

function index(req,res) {
    modelorefrescos.find({}).then(refrescos =>{
        if(refrescos.length) return res.status(200).send({refrescos});
        return res.status(204).send({message: 'No hay datos'});
    }).catch(error => res.status(500).send({error}));
    
}

function crear (req,res){
    new modelorefrescos(req.body).save()
    .then(refrescos => res.status(200).send({refrescos}))
    .catch(error => res.status(500).send({error}));
    
}


function buscar(req,res,next){
    let consulta={};
    consulta[req.params.key]=req.params.value;
    modelorefrescos.find(consulta).then(refrescos=>{
        if(!refrescos.length) return next();
        req.body.refrescos=refrescos;
        return next();
    }).catch(error=>{req.body.error=error;
        next();
    })
}



function mostrar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message:'No se encontro el producto'});
    let refrescos=req.body.refrescos;
    return res.status(200).send({refrescos});
}

function actualizar(req,res){
if(req.body.error) return res.status(500).send({error});
if(!req.body.refrescos) return res.status(400).send({message: 'no se puede actualizar'});
let refrescoObj = req.body.refrescos[0];
refrescoObj=Object.assign(refrescoObj,req.body);
refrescoObj.save().then(refrescosAlta =>{
res.status(200).send({message: 'el registro se actualizo con exito',refrescosAlta});

}).catch(error=> res.status(500).send({error}));

}

function eliminar(req,res){

    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message: 'no se puede eliminar registro'});
    req.body.refrescos[0].remove().then(refrescosEliminar =>{

        res.status(200).send({message: 'eliminado correctamente',refrescosEliminar});

    }).catch(error => res.status(500).send({error}));
}

module.exports ={
    index,
    crear,
    buscar,
    mostrar,
    actualizar,
    eliminar
    
}
