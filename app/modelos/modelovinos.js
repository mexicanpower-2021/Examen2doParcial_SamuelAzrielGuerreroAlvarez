const mongoose = require('mongoose');

const vinosSchema = new mongoose.Schema({
    nombre :{
type: String,
required:true

    },
    codigo :{
        type: Number,
        required:true
        
            },
            precio :{
                type: Number,
                required:true
                
                    },
                    existencia :{
                        type: Number,
                        default:5
                        
                            }

})

const vino = mongoose.model('vino', vinosSchema);
module.exports = vino;