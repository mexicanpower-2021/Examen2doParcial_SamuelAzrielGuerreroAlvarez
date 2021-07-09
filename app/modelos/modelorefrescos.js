const mongoose = require('mongoose');

const refrescosSchema = new mongoose.Schema({
    codigo :{  
type: Number,  
required:true

    },
    Nombre :{
        type: String,
        required:true
        
            },
            descripcion :{
                type: String,
                required:true
                
                    },
                    fecha :{
                        type: Date,
                        default:0
                        
                            }

})

const refresco = mongoose.model('refresco', refrescosSchema);
module.exports = refresco;