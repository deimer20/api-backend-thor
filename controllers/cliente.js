//importar paquetes requeridos de Node
const {response} = require ('express')

//importación de los modelos
const Cliente = require('../models/cliente')
const cliente = require('../models/cliente')

//metodos asincronicos async(req, res)
const clienteGet = async(req, res = response) =>{
    const{cedula} = req.body //Desestructuracion

    const clientes = await Cliente.find()

    res.json({
        clientes
    })

}
//registrar
const clientePost = async(req, res = response) =>{
    const body = req.body //catptura de atributos 
    let mensaje = '' 
    console.log(body)
    try {const cliente = new Cliente(body) // instanciar el objeto
    await cliente.save()
    mensaje = 'La inserción del cliente se efectuó exitosamente'
        
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
const clientePut = async(req, res = response) =>{
    const { cedula, nombre_Cliente, correo, direccion,telefono, estado_Cliente} = req.body //catptura de atributos 
    let mensaje =''

    try {const cliente = await Cliente.findOneAndUpdate({cedula: cedula},{nombre_Cliente:nombre_Cliente, correo:correo, direccion:direccion,telefono:telefono,estado_Cliente:estado_Cliente})
      mensaje = 'La modificación del cliente se efectuó exitosamente'

    }
    catch (e){
      mensaje = 'Se presentaron problemas en la modificación del cliente'
    }
    res.json({
        msg: mensaje
    })
}

//Eliminar
const clienteDelete = async(req, res = response) =>{
    const {_id} = req.body //catptura de atributos 
    let mensaje =''

    try {const cliente = await Cliente.deleteOne({_id: _id})
      mensaje = 'La elimicacion del cliente se efectuó exitosamente'

    }
    catch (e){
      mensaje = 'Se presentaron problemas en la eliminación del cliente'
    }
    res.json({
        msg: mensaje
    })
}
module.exports = {
    clienteGet,
    clientePost,
    clientePut,
    clienteDelete
}