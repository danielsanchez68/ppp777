const clientes = [
    { id: '1', nombre: 'Juan', edad: 23 },
    { id: '2', nombre: 'Ana', edad: 21 },
]

const delay = ms => new Promise(resolve => setTimeout(resolve,ms))

const findCliente = async id => {
    return clientes.find(cliente => cliente.id == id)    
}

const findClientes = async ()  => {
    try {
        await delay(2000)
        return clientes
    }
    //catch(err) {
    catch {
        return []
    }
}

const saveCliente = async cliente => {
    cliente.edad = parseInt(cliente.edad)
    
    const id = parseInt(clientes[clientes.length-1].id) + 1
    cliente.id = String(id)

    clientes.push(cliente)

    return cliente    
}

const updateCliente = async (cliente,id) => {
    /* Actualización total */    
    cliente.id = id
    const index = clientes.findIndex(cliente => cliente.id == id)
    clientes.splice(index, 1, cliente)

    return cliente    
}

const deleteCliente = async id => {
    const index = clientes.findIndex(cliente => cliente.id == id)
    //(1)
    //const cliente = clientes[index]
    //clientes.splice(index, 1)       

    //(2)
    const cliente = clientes.splice(index, 1)[0]
    
    return cliente    
}

export default {
    findCliente,
    findClientes,
    saveCliente,
    updateCliente,
    deleteCliente
}
