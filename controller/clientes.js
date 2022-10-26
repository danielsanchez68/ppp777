import api from '../api/clientes.js'


const getClientes = async (req,res) => {
    const { id } = req.params
    res.json( await api.obtenerClientes(id) )
}

const postCliente = async (req,res) => {
    const cliente = req.body
    res.json(await api.guardarCliente(cliente))
    //res.redirect('/')
}

const putCliente = async (req,res) => {
    const { id } = req.params
    const cliente = req.body
   
    res.json(await api.actualizarCliente(cliente,id))
}

const deleteCliente = async (req,res) => {
    const { id } = req.params
   
    res.json(await api.eliminarCliente(id))
}


export default {
    getClientes,
    postCliente,
    putCliente,
    deleteCliente
}