const { Schema, model } = require('mongoose');

const EmpleadoSchema = Schema({
  cedula: {
    type: Number,
    required: [true, 'El campo cedula es requerido'],
    unique: true,
    minlength: [5],
  },
  nombre_Empleado: {
    type: String,
    required: [true, 'El campo nombre empleado es requerido'],
    minlength: [3,'minimo de caracteres son 3'],
  },
  correo: {
    type: String,
    required: [true, 'El campo correo es requerido'],
    unique: true,
  },

  direccion: {
    type: String,
    required: [true, 'El campo direccion es requerido']
  },
  telefono: {
    type: Number,
    required: [true, 'El campo telefono es requerido'],
  
  },
  estado_Empleado: {
    type: Boolean,
    required: [true, 'El campo estado empleado es requerido'],
    default: true
  }
});

module.exports = model('Empleado', EmpleadoSchema);
