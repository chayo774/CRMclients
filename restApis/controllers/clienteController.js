const Clientes = require('../models/Clientes');

//agrega un nuevo cliente
exports.nuevoCliente = async (req, res) => {
    const cliente = new Clientes(res.body);
    try{
        //almacenar el registro
        await cliente.save();
        res.json({mensaje:'Se agrego un nuevo cliente'})
    } catch(error){
        //si hay un error, console.log y next
        console.log(error);
        next();
    }
}