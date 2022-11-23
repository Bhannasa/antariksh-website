import { Router } from 'express'
import { eventRouter } from './event.js'

const router = Router()
router.use('/event', eventRouter)

export { router }