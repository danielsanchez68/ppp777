import express from 'express'
import controller from '../controller/clientes.js'


const router = express.Router()

/* GET Cliente/s */
router.get('/:id?', controller.getClientes)

/* POST Cliente */
router.post('/', controller.postCliente)

/* PUT Cliente */
router.put('/:id', controller.putCliente)

/* DELETE Cliente */
router.delete('/:id', controller.deleteCliente)


export default router