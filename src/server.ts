import express from 'express'

import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(routes) // contém rotas, conexão banco e envio de email

app.listen(3333, () => {
  console.log('HTTP server running')
})
