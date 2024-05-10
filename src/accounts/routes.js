const { Router } = require('express')
const controller = require('./controller')

const router = Router()

//rotas accounts

router.get("/doctor/:id", controller.getDoctor) 

router.get("/patient/:id", controller.getPatient)


module.exports = router


