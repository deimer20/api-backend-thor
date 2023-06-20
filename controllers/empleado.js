//importar paquetes requeridos de Node
const {response} = require ('express')

//importación de los modelos
const Empleado = require('../models/empleado')
const empleado = require('../models/empleado')

//metodos asincronicos async(req, res)
const empleadoGet = async(req, res = response) =>{
    const{cedula} = req.body //Desestructuracion

    const empleados = await Empleado.find()

    res.json({
        empleados
    })

}
//registrar
const empleadoPost = async(req, res = response) =>{
    const body = req.body //catptura de atributos 
    let mensaje = '' 
    console.log(body)
    try {const empleado = new Empleado(body) // instanciar el objeto
    await empleado.save()
    mensaje = 'La inserción se efectuó exitosamente'
        
    } catch (error) {
        if (error){
            if (error.name === 'ValidationError'){
                console.error(Object.values(error.errors).map(val => val.message))
                mensaje = Object.values(error.errors).map(val => val.message)
            }
        }
        console.log(mensaje)
    }
    res.json({
        msg: mensaje
    })
}
//Modificar
const empleadoPut = async(req, res = response) =>{
    const { cedula, nombre_Empleado, correo, direccion,telefono, estado_Empleado} = req.body //catptura de atributos 
    let mensaje =''

    try {const empleado = await Empleado.findOneAndUpdate({cedula: cedula},{cedula: cedula, nombre_Empleado:nombre_Empleado, correo:correo, direccion:direccion,telefono:telefono,estado_Empleado:estado_Empleado})
      mensaje = 'La modificación se efectuó exitosamente'

    }
    catch (e){
      mensaje = 'Se presentaron problemas en la modificación'
    }
    res.json({
        msg: mensaje
    })

//Eliminar
}
const empleadoDelete = async(req, res = response) =>{
    const { _id} = req.body //catptura de atributos 
    let mensaje =''

    try {const empleado = await Empleado.deleteOne({_id: _id})
      mensaje = 'La elimicacion se efectuó exitosamente'

    }
    catch (e){
      mensaje = 'Se presentaron problemas en la eliminación'
    }
    res.json({
        msg: mensaje
    })
}
module.exports = {
    empleadoGet,
    empleadoPost,
    empleadoPut,
    empleadoDelete
}