//importar paquetes requeridos de Node
const {response} = require ('express')
//const bcrypt = require('bcrypt')

//importación de los modelos
const Usuario = require('../models/usuario')
const usuario = require('../models/usuario')

//metodos asincronicos async(req, res)
const usuarioGet = async(req, res = response) =>{
    const{nombre} = req.body //Desestructuracion

    const usuarios = await Usuario.find()

    res.json({
        usuarios
    })

    /* res.json({
        msg: 'GET API',
        nombre: nombre
    }) */
}
//registrar
const usuarioPost = async(req, res = response) =>{
    const body = req.body //catptura de atributos 
    //const {nombre, password, rol, estado} = req.query   
    let mensaje = '' 
    console.log(body)
    /* const salt =10
    usuario.password=bcrypt.hashSync(body.password, salt) */
    try {const usuario = new Usuario(body) // instanciar el objeto
    mensaje = 'La inserción se efectuó exitosamente'
    await usuario.save()
        
    } catch (error) {
        if (error){
            if (error.name === 'ValidationError'){
                console.error(Object.values(error.errors).map(val => val.message))
                mensaje = Object.values(error.errors).map(val => val.message)
            }
        }
        console.log(      mensaje = 'Se presentaron problemas en el registro'
        )
    }
    res.json({
        msg: mensaje
    })
}
//Modificar
const usuarioPut = async(req, res = response) =>{
    const { nombre, password, rol, estado} = req.body //catptura de atributos 
    let mensaje =''

    try {const usuario = await Usuario.findOneAndUpdate({nombre: nombre},{password: password /* bcrypt.hashSync(body.password, 10)  */, rol:rol, estado:estado})
      mensaje = 'La modificación se efectuó exitosamente'

    }
    catch (e){
      mensaje = 'Se presentaron problemas en la modificación'
    }
    res.json({
        msg: mensaje
    })
}
const usuarioDelete = async(req, res = response) =>{
    const { _id} = req.body //catptura de atributos 
    let mensaje =''

    try {const usuario = await Usuario.deleteOne({_id: _id})
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
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}