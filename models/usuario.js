const { Schema, model} = require ('mongoose')

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El campo nombre es de requerido'],       
        unique: [true, 'El nombre:{VALUE} ya existe'],

    },
    password:{
        type: String,
        required: [true, 'El password es requerido'],
        minlength:[3, 'Debe tener minimo 3 caracteres'],
        maxlength:[7, 'Debe tener maximo 7 caracatres' ]

    },
    rol:{
        type: String,
        required: true,
        enum: ['Admin','Clien','Emple']
    },
    estado:{
        type: Boolean,
        required: [true,'El estado es obligatorio'],
        default: true
    }

})

module.exports = model('Usuario', UsuarioSchema); //Exportar el modelo

