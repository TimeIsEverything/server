import Koa from 'koa'

import settings from './settings.js'

// middleware
import handleErrors from './middleware/handleErrors.js'
import router from './middleware/router.js'

const app = new Koa()

// middleware
app.use(handleErrors)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(settings.server.port)

console.log('Time server running on port ' + settings.server.port)
