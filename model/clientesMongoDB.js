import { MongoClient, ObjectId } from "mongodb"

//const str = 'mongodb://localhost'
const str = 'mongodb+srv://daniel:<password>@misdatos.fs00f.mongodb.net/?retryWrites=true&w=majority'

let connection = false
let db

const conectar = async _ => {
    try {
        console.log('Conectando a la base de datos...')
        const client = new MongoClient(str,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        await client.connect()
        console.log('Base de datos conectada!')

        db = client.db('mibase')
        connection = true

    }
    catch(error) {
        console.log(`Error en la conexión de base datos: ${error.message}`)
    }
}

const desconectar = async () => {
    if(!connection) return
    await client.close()
}

const findCliente = async id => {
    if(!connection) return {}
    let cliente = await db.collection('clientes').findOne({_id: ObjectId(id)})
    return cliente    
}

const findClientes = async ()  => {
    if(!connection) return []
    try {
        let clientes = await db.collection('clientes').find({}).toArray()
        return clientes
    }
    //catch(err) {
    catch {
        return []
    }
}

const saveCliente = async cliente => {
    if(!connection) return {}

    cliente.edad = parseInt(cliente.edad)
    await db.collection('clientes').insertOne(cliente)
    return cliente    
}

const updateCliente = async (cliente,id) => {
    if(!connection) return {}

    await db.collection('clientes').updateOne(
        {_id: ObjectId(id)},
        {$set: cliente}
    )
    let clienteActualizado = await findCliente(id)
    return clienteActualizado    
}

const deleteCliente = async id => {
    if(!connection) return {}

    let clienteEliminado = await findCliente(id)
    await db.collection('clientes').deleteOne({_id: ObjectId(id)})
    
    return clienteEliminado    
}

export default {
    findCliente,
    findClientes,
    saveCliente,
    updateCliente,
    deleteCliente,
    conectar,
    desconectar
}
