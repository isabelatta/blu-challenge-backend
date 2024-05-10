//queries accounts

const getDoctor = "SELECT uf, city, district, street, number, zipcode, clinic_name, name, email, profile_image_url, birthday FROM  doctor INNER JOIN address ON doctor.address_id = address.address_id where doctor_id = $1 ; " 
const getPatient = "SELECT name, age, profile_image_url, birthday FROM patient where patient_id = $1 ;"

module.exports = {
    getDoctor,
    getPatient
}