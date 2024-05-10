const pool = require('../config/db')
const queries = require('./queries')

const getDoctor = (req, res) => {
    
    const doctorId = req.params.id;
    
    pool.query(queries.getDoctor, [doctorId], (error, results) => {
        if (error) throw error
        if(results.rows.length){
            res.status(200).json(results.rows)
        } 
        else res.status(404).send("Não existe Médico com esse Id")
    })
}


const getPatient = (req, res) => {
    
    const patientId = req.params.id;
    
    pool.query(queries.getPatient, [patientId], (error, results) => {
        if (error) throw error
        if(results.rows.length){
            res.status(200).json(results.rows)
        } 
        else res.status(404).send("Não existe Paciente com esse Id")
    })
}

module.exports = {
    getDoctor,
    getPatient
}