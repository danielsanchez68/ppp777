//import model from '../model/clientesMem.js'
import model from '../model/clientesMongoDB.js'

const obtenerClientes = async id => {
    return id? await model.findCliente(id) : await model.findClientes()
}

const guardarCliente = async cliente => {
    return await model.saveCliente(cliente)
}

const actualizarCliente = async (cliente,id) => {
    return await model.updateCliente(cliente,id)
}

const eliminarCliente = async id => {
    return await model.deleteCliente(id)
}


export default {
    obtenerClientes,
    guardarCliente,
    actualizarCliente,
    eliminarCliente
}