//Queries appointments

//cria a consulta
const addAppointments =
 "INSERT INTO appointment (doctor_id, patient_id, complaints, diagnosis) VALUES ($1, $2, $3, $4) RETURNING appointment_id"


module.exports = {
    addAppointments,
}