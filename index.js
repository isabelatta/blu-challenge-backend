// Import the express module
const express = require("express")
const accountsRoutes = require('./src/accounts/routes')
const appointmentsRoutes = require('./src/appointments/routes')

const app = express()
const port = 3000

app.use(express.json())


app.use('/accounts', accountsRoutes)
app.use('/appointments', appointmentsRoutes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

