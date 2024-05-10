const { Router } = require('express')
const controller = require('./controller')

const router = Router()

//rotas appointments 

router.post("/", controller.addAppointments)

module.exports = router