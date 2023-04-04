//en este archivo va solo el recurso para levantar el servidor
const app = require("./app")
require ("dotenv").config();

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en puerto ${PORT}`)
})