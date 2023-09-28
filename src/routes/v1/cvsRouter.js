const express = require("express")
const router = express.Router()
const cvsController = require("../../controllers/cvsController.js")
router
.get("/", cvsController.getAllCvs)

.get("/:cvId", cvsController.getOneCv)

.post("/:cvId",cvsController.createOneCv)

.patch("/:cvId",cvsController.updateOneCv)

.delete("/:cvId", cvsController.deleteOneCv)

.get("/basics", (req, res) => {
  res.send(`<h1> Hello from ${req.url}</h1>`)
})

.get("/educations", (req, res) => {
  res.send(`<h1> Hello from ${req.url}</h1>`)
})

.get("/projects", (req, res) => {
  res.send(`<h1> Hello from ${req.url}</h1>`)
})


module.exports = router