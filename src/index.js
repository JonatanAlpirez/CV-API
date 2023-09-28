const express = require('express')
const v1cvsRouter = require("./routes/v1/cvsRouter")
   
const app = express()
const desiredPort = process.env.PORT ?? 3000

app.use("/api/v1/cvs", v1cvsRouter)

app.get("/", (req, res) => {
  res.send("<h1> Hola desde home</h1>")
})

app.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
