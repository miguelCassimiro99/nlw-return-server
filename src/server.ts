import express from 'express'
import cors from 'cors'

import { routes } from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes) // contém rotas, conexão banco e envio de email

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running')
})
