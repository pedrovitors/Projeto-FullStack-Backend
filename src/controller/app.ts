import {AddressInfo} from "net"
import express, {Express} from "express"
import cors from "cors"

export const app: Express = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3003

const server = app.listen(port, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`)
    } else {
        console.error(`Falha ao rodar o servidor.`)
    }
})