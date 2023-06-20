const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
  cedula: {
    type: Number,
    required: [true, 'El campo cedula es requerido'],
    unique: true
  },
  nombre_Cliente: {
    type: String,
    required: [true, 'El campo nombre cliente es requerido'],
    unique: [true, 'El nombre:{VALUE} ya existe'],
},
  correo: {
    type: String,
    required: [true, 'El campo correo es requerido'],
    unique: true
  },
  direccion: {
    type: String,
    required: [true, 'El campo direccion es requerido']
  },
  telefono: {
    type: String,
    required: [true, 'El campo telefono es requerido']
  },
  estado_Cliente: {
    type: Boolean,
    required: [true, 'El campo estado_Empleado es requerido'],
    default: true
  }
});

module.exports = model('Cliente', ClienteSchema);
