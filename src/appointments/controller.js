const pool = require('../config/db')
const queries = require('./queries')

const addAppointments = async (req, res) => {
    const diagnosis = req.body.diagnosis
    const complaints = req.body.complaints
    const patientId = parseInt(req.body.patientId)
    const doctorId = parseInt(req.body.doctorId)

    if ( diagnosis && complaints && patientId && doctorId){
        pool.query(queries.addAppointments, [patientId, doctorId, complaints, diagnosis], (error, results) => {
            if (error) throw error
            res.status(201).send("Consulta cadastrada com sucesso")
        })
    }
    else res.status(400).send("Consulta inválida")
}



module.exports = {
    addAppointments,
}