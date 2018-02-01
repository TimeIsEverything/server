import Router from 'koa-router'

import settings from '../settings.js'
import body from './body.js'

import postTask from '../routes/postTask.js'
import postTime from '../routes/postTime.js'

// create router
const router = new Router()

const {routes} = settings

router.post('postTask', routes.task, body(), postTask)
router.post('postTime', routes.time, body(), postTime)

export default router
